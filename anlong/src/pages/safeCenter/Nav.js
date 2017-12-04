import React, { Component } from 'react';
import { Button , Icon ,Menu, Dropdown } from 'antd';
import "./nav.css"
class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

  render() {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" href="http://www.alipay.com/">新手标</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">优选标</a>
          </Menu.Item>
        </Menu>
      );
    return (
        <div className="nav">
            <img/>
            <img/>
            <ul>
              <li>
                <a>首页</a>
              </li>
              <li>
                <Dropdown overlay={menu}>
                  <a target="_blank" className="ant-dropdown-link black" href="#">
                      优选理财 <Icon type="down" />
                  </a>
                </Dropdown>
              </li>
              <li>
                <a>车辆借贷</a>
              </li>
              <li>
              <Dropdown overlay={menu}>
                  <a target="_blank" className="ant-dropdown-link black" href="#">
                      信息披露 <Icon type="down" />
                  </a>
                </Dropdown>
              </li>
              <li>
                <a>我的账户</a>
              </li>
            </ul>
        </div>
    );
  }
}

export default Nav;
