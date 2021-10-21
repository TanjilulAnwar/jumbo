import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = ({match}) =>
  <Switch>
    <Route path={`${match.url}/home`} component={asyncComponent(() => import('./Home'))}/>
  </Switch>;


export default withRouter(Routes);

