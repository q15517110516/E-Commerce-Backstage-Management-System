/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/23 21:05
 */

import React, { Component } from 'react';
import { Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

class PageTitle extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.title = this.props.title + ' - List';
    }

    render() {
        return (
            <div className="page-title">
                <Title level={2}>{this.props.title}</Title>
            </div>
        );
    }
}

export default PageTitle;