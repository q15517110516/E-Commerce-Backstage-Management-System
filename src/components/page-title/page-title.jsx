/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 11:28 PM
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
                <Title level={2} style={{marginBottom: 30}}>
                    {this.props.title}
                </Title>
            </div>
        );
    }
}

export default PageTitle;