import React, { Component } from 'react';
import TopHeader from "./TopHeader"
import Nav from "./Nav"
import ContentBody from "./ContentBody"
import FormCollection from "./contentTable/Form"

class SafeCenter extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader/>
        <Nav/>
        <ContentBody/>
      </div>
    );
  }
}

export default SafeCenter;
