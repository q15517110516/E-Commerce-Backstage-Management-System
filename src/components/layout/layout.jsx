/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/11 16:25
 */

import React, { Component } from 'react';
import NavSide from '../nav-side/nav-side';
import NavTop from '../nav-top/nav-top';
import { Layout } from 'antd';
import './layout.css';

const { Content } = Layout;

class HomeLayout extends Component {
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
                <NavSide collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <NavTop collapsed={this.state.collapsed} menuToggle={this.menuToggle} />
                    {/*{this.props.children}*/}

                    {/*Content*/}
                    <Content className="site-layout-background-content" style={ this.state.collapsed ? { margin: '89px 16px 24px 96px' } : { margin: '89px 16px 24px 216px' } }>
                        <div className="content">
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

export default HomeLayout;