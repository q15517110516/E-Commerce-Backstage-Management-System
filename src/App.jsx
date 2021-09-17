/**
 * @Author: Mingrui Liu
 * @Date: 09/17/21 5:58 PM
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayout from './components/layout/layout';
import Home from "./page/home/home";
import ProductRouter from "./page/products/productsRouter";
import Orders from "./page/orders/orders";
import Users from "./page/users/users";
import Login from "./page/login/login";
import ErrorPage from "./page/error/error";


class App extends Component {
    render() {
      let LayoutRouter = (
          <HomeLayout>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product" component={ProductRouter} />
                  <Route path="/product-category" component={ProductRouter} />
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
              </Switch>
          </Router>
      );
    }
}

export default App;