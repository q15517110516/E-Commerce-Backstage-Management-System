/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 14:19
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageTitle title="Orders" />
            </div>
        );
    }
}

export default Orders;