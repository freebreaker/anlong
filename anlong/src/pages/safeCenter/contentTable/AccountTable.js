import React, { Component } from 'react';
import "./accountTable.css"
import AccountTableButton from "./AccountTableButton"

class AccountTable extends Component {
  render() {
    return (
        <div className="accountTable">
           <p>安全中心</p>
           <div className="accountTableItem">
              <img alt=""/>
              <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label>
             <span>152****6936<br/>接收账户信息和资金变动短信通知</span>
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
             <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label>
             <span>胡* / 3210********181216</span> 
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
           <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label> 
             <span>润阳贷与上海银行合作资金存管，保障您的资金安全!</span> 
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
           <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label> 
             <span>登录润阳贷账户时需要输入的密码</span>
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
             <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label> 
             <span>账户资金变动时需输入交易密码，建议您交易密码区别于登录密码</span>
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
           <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label>  
             <span>hufei@runyangdai.com</span>
             <AccountTableButton/> 
           </div>
           <div className="accountTableItem">
           <p>交易手机号码</p>
             <label><input name="Fruit" type="checkbox" value="" />已开通</label> 
             <span>润阳贷为您量身打造了风险评估体系，以个性化理财服务!</span>
             <AccountTableButton/> 
           </div>
        </div>
    );
  }
}

export default AccountTable;