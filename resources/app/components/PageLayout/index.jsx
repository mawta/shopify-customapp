import React from "react";
import { Layout, Menu, Row, Col, Modal, Button, Input } from "antd";
import {
    IdcardTwoTone,
    MehTwoTone,
    ScheduleTwoTone,
    ExclamationCircleOutlined,
    LogoutOutlined,
    ProfileTwoTone,
    EyeInvisibleOutlined,
    EyeTwoTone,
    PieChartTwoTone,
    CrownTwoTone,
    PictureTwoTone,
} from "@ant-design/icons";

import { Link, SwitchTheme } from "../";

import { getCookie, openNotification, getUrlParam } from "../../helper";

import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import axios from "axios";

const { Content, Footer, Sider, Header } = Layout;
const { SubMenu } = Menu;

const themes = {
    dark: `/themes/antd.dark.css`,
    light: `/themes/antd.compact.css`,
};

class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        let th = getCookie("theme");
        this.state = {
            collapsed: false,
            role: app?.user?.role,
            theme: th ? th : "light",
        };
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    logout = () => {
        axios.post("/logout").then((response) => {
            window.location.replace("/register");
        });
    };

    componentDidMount() {}

    confirmLogout = () => {
        Modal.confirm({
            title: "Confirm",
            icon: <ExclamationCircleOutlined />,
            onOk: this.logout,
            content: "Are you sure you want to log out?",
            okText: "Yes, Let me out",
            cancelText: "Cancel",
            width: "600px",
        });
    };

    render() {
        let { role, theme } = this.state;

        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.props.keyMenu}
                    >
                        <Menu.Item key="product-recomend">
                            <Link to="/">Product Recomend</Link>
                        </Menu.Item>
                        <Menu.Item key="price-rule">
                            <Link to="/price-rule">Price Rule</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <div className="site-layout-content">
                        {/* <SwitchTheme
                                        onThemeChange={(theme) => {
                                            this.setState({ theme: theme });
                                        }}
                                    /> */}
                        {this.props.children}
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default PageLayout;
