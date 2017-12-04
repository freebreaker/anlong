import React, { Component } from 'react';
import "./account.css"
import AccountMsgs from "./AccountMsgs"
import AccountTable from "./AccountTable"

class Account extends Component {
  render() {
    return (
        <div className="account">
          <AccountMsgs/>
          <AccountTable/>
        </div>
    );
  }
}

export default Account;