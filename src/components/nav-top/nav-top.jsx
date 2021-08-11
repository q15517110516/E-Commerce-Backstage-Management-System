/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/11 16:29
 */

import React, { Component } from 'react';
import { Dropdown, Layout, Menu } from "antd";
import { LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AccountCircle } from "@material-ui/icons";

const { Header } = Layout;

const loginMenu = (
    <Menu>
        <Menu.Item key="login">
            <a href="#">
                <LoginOutlined />
                Login
            </a>
        </Menu.Item>
    </Menu>
);

const logoutMenu = (
    <Menu>
        <Menu.Item key="logout">
            <a href="#">
                <LogoutOutlined />
                Logout
            </a>
        </Menu.Item>
    </Menu>
);

class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    render() {
        return (
            <div>
                {/*Header*/}
                <Header className="site-layout-background-header">
                    <Menu mode="horizontal">
                        <div key="menuFold" className="trigger" onClick={this.props.menuToggle} style={ this.props.collapsed ? { marginLeft: 80 } : { marginLeft: 200 } }>
                            {this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                        <Dropdown overlay={this.state.loggedIn ? logoutMenu : loginMenu}>
                            <div className="account" onClick={e => e.preventDefault()}>
                                <AccountCircle className="account-icon" style={{ fontSize: 25, marginRight: 10 }} />
                                {this.state.loggedIn ? "Welcome, xxx" : "Please login"}
                            </div>
                        </Dropdown>
                    </Menu>
                </Header>
            </div>
        );
    }
}

export default NavTop;