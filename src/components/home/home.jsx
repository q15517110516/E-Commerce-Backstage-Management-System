/**
 * @Author: Mingrui Liu
 * @Date: 2021/7/15 18:34
 */

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './home.css';
import { Layout, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    LocalMallOutlined,
    PeopleOutlineOutlined,
    AccountCircle,
    AssignmentOutlined
} from '@material-ui/icons';

const { Header, Sider, Content } = Layout;
const loginMenu = (
    <Menu>
        <Menu.Item key="login" style={{ minWidth: 200 }}>
            {/*<div className="login-dropdown">*/}
            {/*    <LoginOutlined />*/}
            {/*    <a href="https://www.antgroup.com">*/}
            {/*        Login*/}
            {/*    </a>*/}
            {/*</div>*/}
        </Menu.Item>
    </Menu>
);

class Home extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ bottom: 0, top: 0, position: 'fixed', zIndex: 1, overflowY: 'auto' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: 20 }}/>}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LocalMallOutlined style={{ fontSize: 20 }}/>}>
                            Products
                        </Menu.Item>
                        <Menu.Item key="3" icon={<AssignmentOutlined style={{ fontSize: 20 }}/>}>
                            Orders
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PeopleOutlineOutlined style={{ fontSize: 20 }}/>}>
                            Users
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ minWidth: 900 }}>
                    <Header style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%', left: 200 }}>
                        <Menu mode="horizontal" style={{ alignContent: "space-between"}}>
                            <Dropdown overlay={loginMenu} trigger={['click']}>
                                <div className="account" onClick={e => e.preventDefault()}>
                                    <AccountCircle className="account-icon" style={{ fontSize: 25 }} />
                                </div>
                            </Dropdown>
                            <div key="menuFold" className="trigger" onClick={this.menuToggle}>
                                {this.state.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            </div>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '35px 50px', margin: '65px 0 0 200px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;