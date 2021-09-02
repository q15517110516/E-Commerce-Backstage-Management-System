/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/2 19:27
 */

import React, { Component } from 'react';
import { Dropdown, Layout, Menu } from "antd";
import { LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AccountCircle } from "@material-ui/icons";
import 'antd/dist/antd.css';
import MUtil from "../../util/mutil";
import UserService from "../../service/user.service";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const _mutil = new MUtil();
const _user = new UserService();

const { Header } = Layout;

class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _mutil.getStorage('userInfo').username || '', // get username from localStorage
            showDialog: false
        }
        this.onLogout = this.onLogout.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    showDialog() {
        this.setState({
            showDialog: true
        });
    }

    onCancelClick() {
        this.setState({
            showDialog: false
        });
    }

    onLogout() {
        _user.logout().then(res => {
            _mutil.removeStorage('userInfo');
            window.location.href = '/login'; // redirect to login page after logout
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
                    <Link onClick={this.showDialog}>
                        <LogoutOutlined />
                        Logout
                    </Link>
                    <Dialog open={this.state.showDialog}
                            onClose={this.onCancelClick}
                            fullWidth={true}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                            {"Log Out"}
                        </DialogTitle>
                        <DialogContent id="alert-dialog-description">
                            <DialogContentText>
                                Are you sure you want to log out?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.onLogout}
                                    variant="contained"
                                    color="primary">
                                Continue
                            </Button>
                            <Button onClick={this.onCancelClick}
                                    variant="outlined"
                                    color="primary"
                                    >
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
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
                        <Dropdown overlay={this.state.username ? logoutMenu : loginMenu}
                                  placement="bottomCenter">
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