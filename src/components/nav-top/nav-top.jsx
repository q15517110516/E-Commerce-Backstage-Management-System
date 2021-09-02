/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/2 15:18
 */

import React, { Component } from 'react';
import { Dropdown, Layout, Menu } from "antd";
import { LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AccountCircle } from "@material-ui/icons";
import 'antd/dist/antd.css';
import MUtil from "../../util/mutil";
import UserService from "../../service/user.service";
import { Link } from 'react-router-dom';

const _mutil = new MUtil();
const _user = new UserService();

const { Header } = Layout;

class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: _mutil.getStorage('userInfo').username || '', // get username from localStorage
        }
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        _user.logout().then(res => {
            _mutil.removeStorage('userInfo');
            window.location.href = '/login';
        }, errMsg => {
            _mutil.errorTips(errMsg);
        });
    }

    render() {
        const loginMenu = (
            <Menu>
                <Menu.Item key="login">
                    <Link to="/login">
                        <LoginOutlined />
                        Login
                    </Link>
                </Menu.Item>
            </Menu>
        );

        const logoutMenu = (
            <Menu>
                <Menu.Item key="logout">
                    <Link onClick={this.onLogout}>
                        <LogoutOutlined />
                        Logout
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                {/*Header*/}
                <Header className="site-layout-background-header">
                    <Menu mode="horizontal">
                        <div key="menuFold"
                             className="trigger"
                             onClick={this.props.menuToggle}
                             style={ this.props.collapsed ? { marginLeft: 80 } : { marginLeft: 200 } }>
                            {this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                        <Dropdown overlay={this.state.username ? logoutMenu : loginMenu}>
                            <div className="account"
                                 onClick={e => e.preventDefault()}>
                                <AccountCircle className="account-icon"
                                               style={{ fontSize: 25, marginRight: 10 }} />
                                {this.state.username ? `Welcome, ${this.state.username}` : "Please login"}
                            </div>
                        </Dropdown>
                    </Menu>
                </Header>
            </div>
        );
    }
}

export default NavTop;