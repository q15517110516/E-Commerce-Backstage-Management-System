/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 13:53
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageTitle title="Home" />
            </div>
        );
    }
}

export default Home;