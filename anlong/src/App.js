import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SafeCenter from "./pages/safeCenter/SafeCenter"
import 'antd/dist/antd.css'
import { Pagination } from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SafeCenter/>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}

export default App;
