/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/19 13:25
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomeLayout from './components/layout/layout';
import Home from "./page/home/home";
import Product from "./page/product/product";
import Category from "./page/category/category";
import Orders from "./page/orders/orders";
import Users from "./page/users/users";

class App extends Component {
  render() {
    return (
        <Router>
            <HomeLayout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/product" component={Product}/>
                    <Route exact path="/product-category" component={Category}/>
                    <Route exact path="/orders" component={Orders}/>
                    <Route exact path="/users" component={Users}/>
                </Switch>
            </HomeLayout>
        </Router>
    );
  }
}

export default App;