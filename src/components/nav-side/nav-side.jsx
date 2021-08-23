/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 13:26
 */

import React, { Component } from 'react';
import { AssignmentOutlined, HomeOutlined, LocalMallOutlined, PeopleOutlineOutlined } from "@material-ui/icons";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link, NavLink, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class NavSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: [],
        };
    }

    componentWillMount() {
        this.props.history.listen(location => {
            const pathName = location.pathname.split('/');
            if (pathName !== null) {
                this.setState({
                    selectedKeys: pathName[1]
                });
            }
        });
    }

    render() {
        let currentLocation = window.location.pathname.split('/');
        if (currentLocation[1] === '') {
            currentLocation[1] = 'home';
        }
        return (
            <Sider className="side-nav" trigger={null} collapsible collapsed={this.props.collapsed}>
                {/*Side Bar*/}
                <div className="logo" />
                <Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys.length ? this.state.selectedKeys : currentLocation}>
                    <Menu.Item key="home" icon={<HomeOutlined style={{ fontSize: 20 }} />}>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </Menu.Item>
                    <SubMenu key="products" icon={<LocalMallOutlined style={{ fontSize: 20 }} />} title="Products" >
                        <Menu.Item key="product">
                            <NavLink to="/product">
                                Product
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="product-category">
                            <NavLink to="/product-category">
                                Category
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="orders" icon={<AssignmentOutlined style={{ fontSize: 20 }} />}>
                        <NavLink to="/orders">
                            Orders
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="users" icon={<PeopleOutlineOutlined style={{ fontSize: 20 }} />}>
                        <NavLink to="/users">
                            Users
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(NavSide);