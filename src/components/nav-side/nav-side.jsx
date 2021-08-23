/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/23 21:05
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
            openKeys: [],
        };
        this.onOpenChange = this.onOpenChange.bind(this);
    }

    componentDidMount() {
        this.props.history.listen(location => {
            const pathName = location.pathname.split('/');
            if (pathName[1] === 'product' || pathName[1] === 'product-category') {
                this.setState({
                    openKeys: ['products']
                });
            }
        });
    }

    onOpenChange = (openKeys) => {
        console.log(openKeys);
        console.log(this.state.openKeys);
        if (openKeys.length === 0) {
            this.setState({
                openKeys: openKeys
            })
        }
        const latestOpenKey = openKeys[openKeys.length - 1];
        if (latestOpenKey && latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys: []
            });
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }

    render() {
        // Get Current Window Pathname
        // Highlight nav-side Menu When Router Changes
        let currentLocation = window.location.pathname.split('/');
        if (currentLocation[1] === '') {
            currentLocation[1] = 'home';
        }
        return (
            <Sider className="side-nav" trigger={null} collapsible collapsed={this.props.collapsed}>
                {/*Side Bar*/}
                <div className="logo" />
                <Menu theme="dark" mode="inline"
                      selectedKeys={currentLocation}
                      onOpenChange={this.onOpenChange}
                      openKeys={this.state.openKeys}
                >
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