/**
 * @Author: Mingrui Liu
 * @Date: 2021/7/23 10:44
 */

import React, { Component } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined } from '@ant-design/icons';
import { HomeOutlined, LocalMallOutlined, PeopleOutlineOutlined, AccountCircle, AssignmentOutlined } from '@material-ui/icons';
import 'antd/dist/antd.css';
import './home.css';

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
                <Sider className="side-nav" trigger={null} collapsible collapsed={this.state.collapsed}>
                    {/*Side Bar*/}
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: 20 }} />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LocalMallOutlined style={{ fontSize: 20 }} />}>
                            Products
                        </Menu.Item>
                        <Menu.Item key="3" icon={<AssignmentOutlined style={{ fontSize: 20 }} />}>
                            Orders
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PeopleOutlineOutlined style={{ fontSize: 20 }} />}>
                            Users
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/*Header*/}
                    <Header className="site-layout-background-header">
                        <Menu mode="horizontal">
                            <div key="menuFold" className="trigger" onClick={this.menuToggle} style={ this.state.collapsed ? { marginLeft: 80 } : { marginLeft: 200 } }>
                                {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </div>
                            <Dropdown overlay={loginMenu} trigger={['click']}>
                                <div className="account" onClick={e => e.preventDefault()}>
                                    <AccountCircle className="account-icon" style={{ fontSize: 25 }} />
                                </div>
                            </Dropdown>
                        </Menu>
                    </Header>

                    {/*Content*/}
                    <Content className="site-layout-background-content" style={ this.state.collapsed ? { margin: '89px 16px 24px 96px' } : { margin: '89px 16px 24px 216px' } }>
                        <div>
                            content
                            <br/>
                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>                            content
                            <br/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;