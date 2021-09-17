/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 14:18
 */

import React, { Component } from 'react';
import PageTitle from "../../../components/page-title/page-title";

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageTitle title="Category" />
            </div>
        );
    }
}

export default Category;