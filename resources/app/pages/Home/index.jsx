import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { PageLayout } from "../../components";
import FacebookLogin from "react-facebook-login";
import { openNotification, api } from "../../helper";
import {
    Tabs,
    Steps,
    Input,
    Select,
    Space,
    Cascader,
    Layout,
    Radio,
    Row,
    Col,
    Button,
    List,
} from "antd";
import {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";
const { Step } = Steps;
const { Header } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            radioValue: "tag",
            radioValue2: "tag",
            limit: 8,
            productRuleRecommend: 1,
            productRuleCollectionId: "all",
            productRuleCollectionIdRecommend: "all",
        };
    }

    componentDidMount() {
        this.props.fetchData({
            url: "api/get-collections",
            callback: (response) => {
                this.setState({
                    collections: response.data.collections,
                });
            },
        });

        this.props.fetchData({
            url: "api/get-products",
            callback: (response) => {
                this.setState({
                    products: response.data.products,
                });
            },
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        let data = nextProps.data;
        let postResponse = nextProps.postResponse;

        console.log(data);
        console.log(postResponse);
    }

    onChangeRadio = (e) => {
        console.log("radio checked", e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    };

    render() {
        const {
            status1,
            status2,
            current,
            radioValue,
            collections,
            products,
            limit,
            radioValue2,
            tagValue,
            productRuleCollectionId,
            tagValueRecommend,
            productRuleCollectionIdRecommend,
            productRuleRecommend,
            loading,
            listProductRecommend,
            productRuleId,
        } = this.state;

        const steps = [
            {
                title: "First",
                content: "First-content",
            },
            {
                title: "Second",
                content: "Second-content",
            },
        ];

        return (
            <PageLayout keyMenu={["product-recomend"]}>
                <ConfigProvider locale={frFR}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Bulk" key="1">
                            <div>
                                <h2>Product's rule</h2>
                                <div className="mt-4">
                                    <Radio.Group
                                        onChange={this.onChangeRadio}
                                        value={radioValue}
                                    >
                                        <Radio value={"tag"}>Tags</Radio>
                                        <Radio value={"collection"}>
                                            Collection
                                        </Radio>
                                        <Radio value={"product"}>Product</Radio>
                                    </Radio.Group>
                                </div>
                                <div className="mt-3">
                                    {radioValue == "tag" && (
                                        <Input
                                            placeholder="tag1, tag2, ..."
                                            onChange={(e) => {
                                                this.setState({
                                                    tagValue: e.target.value,
                                                });
                                            }}
                                        />
                                    )}
                                    {radioValue == "collection" && (
                                        <Row gutter={[12, 12]}>
                                            <Col span="24">
                                                <Select
                                                    style={{ width: "100%" }}
                                                    defaultValue="all"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            productRuleCollectionId:
                                                                e,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(
                                                        input,
                                                        option
                                                    ) => {
                                                        try {
                                                            return (
                                                                option.children
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            );
                                                        } catch (e) {
                                                            console.log(e);
                                                        }
                                                    }}
                                                >
                                                    <Select.Option value="all">
                                                        All
                                                    </Select.Option>
                                                    {collections &&
                                                        Array.isArray(
                                                            collections
                                                        ) &&
                                                        collections.map((c) => (
                                                            <Select.Option
                                                                value={c.id}
                                                            >
                                                                {c.title}
                                                            </Select.Option>
                                                        ))}
                                                </Select>
                                            </Col>
                                        </Row>
                                    )}
                                    {radioValue == "product" && (
                                        <Row gutter={[12, 12]}>
                                            <Col span="24">
                                                <Select
                                                    style={{ width: "100%" }}
                                                    defaultValue="Select product"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            productRuleId: e,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(
                                                        input,
                                                        option
                                                    ) => {
                                                        try {
                                                            return (
                                                                option.children
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            );
                                                        } catch (e) {
                                                            console.log(e);
                                                        }
                                                    }}
                                                >
                                                    {products &&
                                                        Array.isArray(
                                                            products
                                                        ) &&
                                                        products.map((c) => (
                                                            <Select.Option
                                                                value={c.id}
                                                            >
                                                                {c.title} -
                                                                {" " + c.handle}
                                                            </Select.Option>
                                                        ))}
                                                </Select>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            </div>
                            <div className="mt-5">
                                <h2>Product recommend rule</h2>
                                <div className="mt-3">
                                    <Space>
                                        <a>Limit: </a>
                                        <Input
                                            type="number"
                                            value={limit}
                                            onChange={(e) => {
                                                this.setState({
                                                    limit: e.target.value,
                                                });
                                            }}
                                        />{" "}
                                        <a>Rule</a>{" "}
                                        <Select
                                            style={{ width: "200px" }}
                                            defaultValue="1"
                                            onChange={(e) => {
                                                this.setState({
                                                    productRuleRecommend: e,
                                                });
                                            }}
                                        >
                                            <Select.Option value="1">
                                                Best selling
                                            </Select.Option>
                                            <Select.Option value="2">
                                                Newest
                                            </Select.Option>
                                        </Select>
                                    </Space>
                                </div>
                                <div className="mt-4">
                                    <Radio.Group
                                        onChange={(e) => {
                                            this.setState({
                                                radioValue2: e.target.value,
                                            });
                                        }}
                                        value={radioValue2}
                                    >
                                        <Radio value={"tag"}>Tags</Radio>
                                        <Radio value={"collection"}>
                                            Collection
                                        </Radio>
                                        <Radio value={"product"}>Product</Radio>
                                    </Radio.Group>
                                </div>
                                <div className="mt-3">
                                    {radioValue2 == "tag" && (
                                        <Input
                                            placeholder="tag1, tag2, ..."
                                            onChange={(e) => {
                                                this.setState({
                                                    tagValueRecommend:
                                                        e.target.value,
                                                });
                                            }}
                                        />
                                    )}
                                    {radioValue2 == "collection" && (
                                        <Row gutter={[12, 12]}>
                                            <Col span="24">
                                                <Select
                                                    showSearch
                                                    filterOption={(
                                                        input,
                                                        option
                                                    ) => {
                                                        try {
                                                            return (
                                                                option.children
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            );
                                                        } catch (e) {
                                                            console.log(e);
                                                        }
                                                    }}
                                                    style={{ width: "100%" }}
                                                    defaultValue="all"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            productRuleCollectionIdRecommend:
                                                                e,
                                                        });
                                                    }}
                                                >
                                                    <Select.Option value="all">
                                                        All
                                                    </Select.Option>
                                                    {collections &&
                                                        Array.isArray(
                                                            collections
                                                        ) &&
                                                        collections.map((c) => (
                                                            <Select.Option
                                                                value={c.id}
                                                            >
                                                                {c.title}
                                                            </Select.Option>
                                                        ))}
                                                </Select>
                                            </Col>
                                        </Row>
                                    )}
                                    {radioValue2 == "product" && (
                                        <Row gutter={[12, 12]}>
                                            <Col span="24">
                                                <Select
                                                    style={{ width: "100%" }}
                                                    defaultValue="Select product"
                                                    onChange={(key) => {
                                                        var temp =
                                                            products[key];

                                                        let {
                                                            listProductRecommend,
                                                        } = this.state;

                                                        if (
                                                            !listProductRecommend
                                                        ) {
                                                            listProductRecommend =
                                                                [];
                                                        }

                                                        if (
                                                            !listProductRecommend.includes(
                                                                temp
                                                            )
                                                        ) {
                                                            listProductRecommend.push(
                                                                temp
                                                            );
                                                        }
                                                        this.setState({
                                                            listProductRecommend,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(
                                                        input,
                                                        option
                                                    ) => {
                                                        try {
                                                            return (
                                                                option.children
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            );
                                                        } catch (e) {
                                                            console.log(e);
                                                        }
                                                    }}
                                                >
                                                    {products &&
                                                        Array.isArray(
                                                            products
                                                        ) &&
                                                        products.map(
                                                            (c, key) => (
                                                                <Select.Option
                                                                    value={key}
                                                                >
                                                                    {c.title} -
                                                                    {" " +
                                                                        c.handle}
                                                                </Select.Option>
                                                            )
                                                        )}
                                                </Select>
                                            </Col>
                                            <Col span="24">
                                                <List
                                                    className="demo-loadmore-list"
                                                    itemLayout="horizontal"
                                                    dataSource={
                                                        listProductRecommend
                                                    }
                                                    renderItem={(item) => (
                                                        <List.Item
                                                            actions={[
                                                                <a
                                                                    key="list-loadmore-more"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        let {
                                                                            listProductRecommend,
                                                                        } =
                                                                            this
                                                                                .state;

                                                                        if (
                                                                            !listProductRecommend
                                                                        ) {
                                                                            listProductRecommend =
                                                                                [];
                                                                        }
                                                                        listProductRecommend =
                                                                            listProductRecommend.filter(
                                                                                (
                                                                                    i
                                                                                ) =>
                                                                                    i.id !==
                                                                                    item.id
                                                                            );

                                                                        this.setState(
                                                                            {
                                                                                listProductRecommend,
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    Delete
                                                                </a>,
                                                            ]}
                                                        >
                                                            <div>
                                                                {item.title}+
                                                                {" " +
                                                                    item.handle}
                                                            </div>
                                                        </List.Item>
                                                    )}
                                                />
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            </div>
                            <div className="mt-5">
                                <Button
                                    loading={loading}
                                    type="primary"
                                    size="middle"
                                    onClick={(e) => {
                                        this.setState({ loading: 1 });
                                        this.props.postData({
                                            url: "api/save-product-recommend",
                                            data: {
                                                productRuleType: radioValue,
                                                productRecommendRuleType:
                                                    radioValue2,
                                                tagValue,
                                                productRuleCollectionId,
                                                limit,
                                                tagValueRecommend,
                                                productRuleCollectionIdRecommend,
                                                productRuleRecommend,
                                                productRuleId,
                                                listProductRecommend,
                                            },
                                            callback: (res) => {
                                                this.setState({ loading: 0 });
                                                openNotification(
                                                    res.data.status,
                                                    res.data.message
                                                );
                                            },
                                        });
                                    }}
                                >
                                    SAVE
                                </Button>
                            </div>
                        </TabPane>
                    </Tabs>
                </ConfigProvider>
            </PageLayout>
        );
    }
}

Home.propsType = {
    fetchData: PropTypes.func.isRequired,
    postData: PropTypes.func.isRequired,
};

export default Home;
