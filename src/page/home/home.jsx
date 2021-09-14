/**
 * @Author: Mingrui Liu
 * @Date: 09/14/21 3:50 PM
 */

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './home.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Number from "../../util/number";

const _number = new Number();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: _number.formatNumber('4328'),
            productCount: _number.formatNumber('18340'),
            orderCount: _number.formatNumber('24597')
        }
    }

    componentWillMount() {
        document.title = 'Home';
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="homepage-data">
                    {/*User Count*/}
                    <Link className="homepage-data-box" to="/users">
                        <Card className="home-data-card users"
                              hoverable={true}>
                            <SupervisorAccountIcon className="user-icon"
                                                   style={{ fontSize: 70 }} />
                            <div className="home-data-card-text">
                                <span className="text">Users</span>
                                <span className="number">{this.state.userCount}</span>
                            </div>
                        </Card>
                    </Link>
                    {/*Product Count*/}
                    <Link className="homepage-data-box" to="/product">
                        <Card className="home-data-card products"
                              hoverable={true}>
                            <LocalMallIcon className="product-icon"
                                           style={{ fontSize: 70 }} />
                            <div className="home-data-card-text">
                                <span className="text">Products</span>
                                <span className="number">{this.state.productCount}</span>
                            </div>
                        </Card>
                    </Link>
                    {/*Order Count*/}
                    <Link className="homepage-data-box" to="/orders">
                        <Card className="home-data-card orders"
                              hoverable={true}>
                            <ListAltIcon className="order-icon"
                                         style={{ fontSize: 70 }} />
                            <div className="home-data-card-text">
                                <span className="text">Orders</span>
                                <span className="number">{this.state.orderCount}</span>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;