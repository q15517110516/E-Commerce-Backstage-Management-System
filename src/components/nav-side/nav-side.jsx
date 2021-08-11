/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/11 16:20
 */

import React, {Component} from 'react';
import { AssignmentOutlined, HomeOutlined, LocalMallOutlined, PeopleOutlineOutlined } from "@material-ui/icons";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link, NavLink } from 'react-router-dom';

const { Sider } = Layout;

class NavSide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sider className="side-nav" trigger={null} collapsible collapsed={this.props.collapsed}>
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
        );
    }
}

export default NavSide;