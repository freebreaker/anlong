import React, { Component } from 'react';
import AccountList from "./AccountList";
import "./AccountMsgs.css"

class AccountMsgs extends Component {
  render() {
    return (
        <div className="accountmsgs">
            <img/>
            <p>1516*****4566</p>
            <button>签到</button>
            <AccountList/>
        </div>
    );
  }
}

export default AccountMsgs;