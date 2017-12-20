

require("babel-register");

import React from 'react'

import path from 'path'

import { renderToString } from 'react-dom/server';

import { RoutingContext, match } from 'react-router';

import ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'

import configureStore from '../app/store'

import routes from '../app/routes'


var express = require("express");

const app = express()

const renderFullPage = (html, preloadState) => {

    return `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
      <title>React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__INITIAL_STATE__ =${JSON.stringify(preloadState)}</script>
      <script src="/static/js/bundle.js"></script>
    </body>
   </html>
   `
}

const handleRender = (req,res)=>{

    console.log(22)

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
          res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
          res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          const store = configureStore();
          const state = store.getState();
    
          Promise.all([
            // store.dispatch(fetchList()),
            // store.dispatch(fetchItem(renderProps.params.id))
          ])
          .then(() => {
              console.log('next question')
            const html = renderToString(
              <Provider store={store}>
                <RoutingContext {...renderProps} />
              </Provider>
            );
            res.end(renderFullPage(html, store.getState()));
          });
        } else {
          res.status(404).end('Not found');
        }
      });

    // const html = ReactDOMServer.renderToString(

    //     <Provider store = {store}>
    //         <APP/>
    //     </Provider>
    // )

    // const preloadState = store.getState()

    // res.send(renderFullPage(html,preloadState))
}


app.use(handleRender)



app.listen(3007, (error) => {
    if (error) {
         console.error(error)
    }
})

console.log(33333)

export default app