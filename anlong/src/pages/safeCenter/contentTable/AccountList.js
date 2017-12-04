import React, { Component } from 'react';
import "./accountList.css"


class AccountList extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr:[],
            valid:false
        }
    }


  handleClick(){
      console.log(55)
      this.setState({
          arr:["我的投资","自动投标"],
          valid:true
      })
      
  }  
  render() {
    return (
        <div className="accountList">
            <ul>
                <li onClick={this.handleClick.bind(this)} >
                <img alt=""/>
                    <a>帐户总览</a>
                    {this.state.valid ? <a>222</a> : ""}
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
                <li>
                <img alt=""/>
                <a>帐户总览</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default AccountList;