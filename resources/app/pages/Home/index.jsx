import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { PageLayout } from "../../components";
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
    Table,
    Tag,
} from "antd";
import {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
    CheckCircleOutlined,
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
            limit: 4,
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

        this.props.fetchData({
            url: "api/get-history",
            callback: (response) => {
                this.setState({
                    recommends: response.data.recommends,
                    autoupdates: response.data.autoupdates,
                });
            },
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        let data = nextProps.data;
        let postResponse = nextProps.postResponse;
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
            recommends,
            autoupdates,
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

        const columns = [
            {
                title: "Auto",
                key: "auto",
                render: (record) => {
                    if (
                        record.product_rule_id != "0" ||
                        record.product_recommend_rule_type == "product"
                    )
                        return "";
                    return (
                        <Button
                            loading={this.state["loadingActive" + record.id]}
                            type="primary"
                            style={{
                                width: "60%",
                            }}
                            onClick={(e) => {
                                var obj = {};
                                obj["loadingActive" + record.id] = 1;
                                this.setState(obj);
                                this.props.postData({
                                    url: "api/active-auto",
                                    data: {
                                        id: record.id,
                                    },
                                    callback: (r) => {
                                        if (r.data) {
                                            openNotification(
                                                "info",
                                                "Activated successfull!"
                                            );

                                            var recommends1 = recommends;
                                            var autoupdates1 = autoupdates;
                                            var rc = record;
                                            rc.active_auto = 1;
                                            autoupdates1.unshift(rc);

                                            this.setState(
                                                { autoupdates: [] },
                                                () => {
                                                    this.setState({
                                                        autoupdates:
                                                            autoupdates1,
                                                    });
                                                }
                                            );

                                            recommends1 = recommends1.filter(
                                                (i) => i.id != record.id
                                            );

                                            var obj = {
                                                recommends: recommends1,
                                            };
                                            obj[
                                                "loadingActive" + record.id
                                            ] = 0;
                                            this.setState(obj);
                                        }
                                    },
                                });
                            }}
                        >
                            Activate
                        </Button>
                    );
                },
            },
            {
                title: "Product",
                key: "pr",
                render: (record) => (
                    <div>
                        {record.product_rule_type && (
                            <p>
                                <b>Type:</b> {record.product_rule_type}
                            </p>
                        )}
                        {record.product_rule_id != "0" && (
                            <p>
                                <b>Product id:</b> {record.product_rule_id}
                            </p>
                        )}
                        {record.product_rule_collection_id != "0" && (
                            <p>
                                <b>Collection id:</b>{" "}
                                {record.product_rule_collection_id}
                            </p>
                        )}
                        {record.tag_value != "" && record.tag_value != null && (
                            <p>
                                <b>Tags:</b> {record.tag_value}
                            </p>
                        )}
                    </div>
                ),
            },
            {
                title: "Product Recommend",
                key: "prr",
                render: (record) => (
                    <div>
                        {record.product_recommend_rule_type && (
                            <p>
                                <b>Type:</b>{" "}
                                {record.product_recommend_rule_type}
                            </p>
                        )}
                        {record.product_rule_collection_id_recommend != "0" &&
                            record.product_recommend_rule_type ==
                                "collection" && (
                                <p>
                                    <b>Collection id:</b>{" "}
                                    {
                                        record.product_rule_collection_id_recommend
                                    }
                                </p>
                            )}
                        {record.tag_value_recommend != "" &&
                            record.tag_value_recommend != null && (
                                <p>
                                    <b>Tags:</b> {record.tag_value_recommend}
                                </p>
                            )}
                    </div>
                ),
            },
            {
                title: "Rule",
                key: "rr",
                render: (record) => (
                    <div>
                        {record.product_rule_recommend && (
                            <p>
                                <b>Rule:</b>{" "}
                                {record.product_rule_recommend == 1
                                    ? "Best selling"
                                    : "Newest"}
                            </p>
                        )}
                        {record.limit && (
                            <p>
                                <b>Limit:</b> {record.limit}
                            </p>
                        )}
                    </div>
                ),
            },
            {
                title: "Date",
                key: "dt",
                render: (record) => {
                    var date = new Date(record.updated_at);
                    return date.toDateString();
                },
            },
        ];
        const columns1 = [
            {
                title: "Auto",
                key: "auto1",
                render: (record) => {
                    return (
                        record &&
                        record.active_auto && (
                            <Button
                                loading={
                                    this.state["loadingActive" + record.id]
                                }
                                type="primary"
                                style={{
                                    width: "60%",
                                }}
                                onClick={(e) => {
                                    var obj = {};
                                    obj["loadingActive" + record.id] = 1;
                                    this.setState(obj);
                                    this.props.postData({
                                        url: "api/active-auto",
                                        data: {
                                            id: record.id,
                                            deactivate: 1,
                                        },
                                        callback: (r) => {
                                            if (r.data) {
                                                openNotification(
                                                    "info",
                                                    "Deactivated successfull!"
                                                );
                                                var recommends1 = recommends;
                                                var autoupdates1 = autoupdates;
                                                var rc = record;
                                                rc.active_auto = 0;
                                                recommends1.unshift(rc);

                                                this.setState(
                                                    {
                                                        recommends: [],
                                                    },
                                                    () => {
                                                        this.setState({
                                                            recommends:
                                                                recommends1,
                                                        });
                                                    }
                                                );

                                                autoupdates1 =
                                                    autoupdates1.filter(
                                                        (i) => i.id != record.id
                                                    );
                                                var obj = {
                                                    autoupdates: autoupdates1,
                                                };
                                                obj[
                                                    "loadingActive" + record.id
                                                ] = 0;
                                                this.setState(obj);
                                            }
                                        },
                                    });
                                }}
                            >
                                Delete
                            </Button>
                        )
                    );
                },
            },
            {
                title: "Product",
                key: "pr1",
                render: (record) => (
                    <div>
                        {record.product_rule_type && (
                            <p>
                                <b>Type:</b> {record.product_rule_type}
                            </p>
                        )}
                        {record.product_rule_id != "0" && (
                            <p>
                                <b>Product id:</b> {record.product_rule_id}
                            </p>
                        )}
                        {record.product_rule_collection_id != "0" && (
                            <p>
                                <b>Collection id:</b>{" "}
                                {record.product_rule_collection_id}
                            </p>
                        )}
                        {record.tag_value != "" && record.tag_value != null && (
                            <p>
                                <b>Tags:</b> {record.tag_value}
                            </p>
                        )}
                    </div>
                ),
            },
            {
                title: "Product Recommend",
                key: "prr1",
                render: (record) => (
                    <div>
                        {record.product_recommend_rule_type && (
                            <p>
                                <b>Type:</b>{" "}
                                {record.product_recommend_rule_type}
                            </p>
                        )}
                        {record.product_rule_collection_id_recommend != "0" &&
                            record.product_recommend_rule_type ==
                                "collection" && (
                                <p>
                                    <b>Collection id:</b>{" "}
                                    {
                                        record.product_rule_collection_id_recommend
                                    }
                                </p>
                            )}
                        {record.tag_value_recommend != "" &&
                            record.tag_value_recommend != null && (
                                <p>
                                    <b>Tags:</b> {record.tag_value_recommend}
                                </p>
                            )}
                    </div>
                ),
            },
            {
                title: "Rule",
                key: "rr1",
                render: (record) => (
                    <div>
                        {record.product_rule_recommend && (
                            <p>
                                <b>Rule:</b>{" "}
                                {record.product_rule_recommend == 1
                                    ? "Best selling"
                                    : "Newest"}
                            </p>
                        )}
                        {record.limit && (
                            <p>
                                <b>Limit:</b> {record.limit}
                            </p>
                        )}
                    </div>
                ),
            },
            {
                title: "Date",
                key: "dt1",
                render: (record) => {
                    var date = new Date(record.updated_at);
                    return date.toDateString();
                },
            },
        ];
        return (
            <PageLayout keyMenu={["product-recomend"]}>
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
                                                    Array.isArray(products) &&
                                                    products.map((c) => (
                                                        <Select.Option
                                                            value={c.id}
                                                        >
                                                            {c.title} |
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
                                                    var temp = products[key];

                                                    let {
                                                        listProductRecommend,
                                                    } = this.state;

                                                    if (!listProductRecommend) {
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
                                                    Array.isArray(products) &&
                                                    products.map((c, key) => (
                                                        <Select.Option
                                                            value={key}
                                                        >
                                                            {c.title} |
                                                            {" " + c.handle}
                                                        </Select.Option>
                                                    ))}
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
                                                            {item.title} |
                                                            {" " + item.handle}
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

                    <TabPane tab="History" key="2">
                        <div>
                            <Table
                                key="tb1"
                                columns={columns}
                                dataSource={recommends}
                            />
                        </div>
                    </TabPane>

                    <TabPane tab="Auto Update" key="3">
                        <div>
                            <Table
                                key="tb2"
                                columns={columns1}
                                dataSource={autoupdates}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </PageLayout>
        );
    }
}

Home.propsType = {
    fetchData: PropTypes.func.isRequired,
    postData: PropTypes.func.isRequired,
};

export default Home;
