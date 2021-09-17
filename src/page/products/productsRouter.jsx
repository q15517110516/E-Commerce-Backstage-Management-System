/**
 * @Author: Mingrui Liu
 * @Date: 09/17/21 4:44 PM
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Product from "./product/product";

class ProductRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/product/list" component={Product} />
                {/*<Route path="/product/save/:pid?" component={} />*/}
                {/*<Route path="/product/detail/:pid" component={} />*/}
                {/*<Route path="/product-category/list/:categoryId?" component={} />*/}
                {/*<Route path="/product-category/add" component={} />*/}
                <Redirect exact from="/product" to="/product/list"/>
            </Switch>
        );
    }
}

export default ProductRouter;