/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 13:51
 */

import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class PageTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title level={2}>{this.props.title}</Title>
            </div>
        );
    }
}

export default PageTitle;