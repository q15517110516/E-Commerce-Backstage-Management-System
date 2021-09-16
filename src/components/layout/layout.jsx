/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/20 17:55
 */

import React, { Component } from 'react';
import NavSide from '../nav-side/nav-side';
import NavTop from '../nav-top/nav-top';
import { Layout } from 'antd';
import './layout.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

class HomeLayout extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <NavSide collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <NavTop collapsed={this.state.collapsed}
                            menuToggle={this.menuToggle}
                    />
                    {/*Content*/}
                    <Content className="site-layout-background-content"
                             style={ this.state.collapsed ? { margin: '89px 16px 24px 96px' } : { margin: '89px 16px 24px 216px' } }>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default HomeLayout;