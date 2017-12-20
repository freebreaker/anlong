import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link ,Switch} from 'react-router-dom';
import MyProperty from "../../img/MyProperty.png";
import "./Account.css"

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){

  }

  render(){
      return(
          <div className="Account">
              <div className="AccountBg"></div>
              <div className="AccountTab"></div>
              <div className="AccountBehavior"></div>
              <ul className="AccountItem">
              <div className="AccountItemRow">
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              </div>
              <div className="AccountItemRow">
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              </div>
              <div className="AccountItemRow">
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
              <Link to="/Invest" className="InvestLink"><img src={MyProperty} style={{width:'100%',height:'100%'}}/></Link>
                </div>
              </ul>
          </div>
      )
  }
}

export default Account