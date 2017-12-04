import React, { Component } from 'react';
import Account from "./contentTable/Account"
import AccountTable from "./contentTable/AccountTable"
import "./content.css"

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class ContentBody extends Component {
  render() {
    return (
        <div id="contentbody">
          <Account/>
        </div>

    )
  }
}

export default ContentBody;