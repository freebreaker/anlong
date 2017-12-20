import React from 'react';
import { Route } from 'react-router';

const Container = (props) => {
  return (
    <div>{props.children}</div>
  );
};

const routes = (
  <Route path="/" component={Container} >
  </Route>
);

export default routes;