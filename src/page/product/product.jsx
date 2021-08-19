/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 14:05
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageTitle title="Products" />
            </div>
        );
    }
}

export default Product;