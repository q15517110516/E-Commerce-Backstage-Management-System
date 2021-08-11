/**
 * @Author: Mingrui Liu
 * @Date: 2021/7/14 13:02
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomeLayout from './components/layout/layout';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
              <Route exact path="/" component={HomeLayout}/>
              <Redirect from="*" to="/"/>
          </Switch>
        </Router>
    );
  }
}

export default App;