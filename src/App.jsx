/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 11:13 PM
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomeLayout from './components/layout/layout';
import Home from "./page/home/home";
import Product from "./page/product/product";
import Category from "./page/category/category";
import Orders from "./page/orders/orders";
import Users from "./page/users/users";
import Login from "./page/login/login";
import ErrorPage from "./page/error/error";
import MUtil from "./util/mutil";

const _mutil = new MUtil();

class App extends Component {
    constructor(props) {
        super(props);
        // When not logged in, should not access to other page
        // this.state = {
        //     isLoggedIn: _mutil.getStorage('userInfo')
        // }
    }

    render() {
      let LayoutRouter = (
          <HomeLayout>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product" component={Product} />
                  <Route path="/product-category" component={Category} />
                  <Route path="/orders" component={Orders} />
                  <Route path="/users" component={Users} />
              </Switch>
          </HomeLayout>
      );
      return (
          <Router>
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/" render={props => LayoutRouter} />
                  {/*{this.state.isLoggedIn ?*/}
                  {/*    <Route path="/" render={props => LayoutRouter} /> :*/}
                  {/*    <Redirect to="/login" component={Login} />*/}
                  {/*}*/}
              </Switch>
          </Router>
      );
    }
}

export default App;