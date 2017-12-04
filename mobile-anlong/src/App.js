import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css'; 
import {BrowserRouter as Router,Route, Link ,Switch} from 'react-router-dom'
import Register  from "./pages/Register/index"
import Homepage from "./pages/Homepages/index"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Switch>
          <Route path="/" exact component={Register}/>
          <Route path="/home"  component = {Homepage}/>
        </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
