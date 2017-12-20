import React from 'react';
import { Route } from 'react-router';
import Component1 from './Components/Component1'

const Container = (props) => {
  return (
    <div>{props.children}</div>
  );
};

const routes = (
  <Route path="/" component={Container} >
    <Route path="list" component={Component1} />
  </Route>
);

export default routes;