/**
 * Created by dady on 2017/12/15.
 */

import React, {Component} from 'react';
import List from './list/index.jsx';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/list" component={List}/>
        <Redirect from="/" to="/list"/>
      </Switch>
    );
  }
}

export default Routes;