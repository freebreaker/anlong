import React, { Component } from 'react';
import { Button , Icon } from 'antd';
import "./topheader.css"
class App extends Component {
  render() {
    return (
        <div className="TopHeader">
              <ul className="LeftHeader">
                  <li>
                      <Icon type="tablet" />
                      <a>App下载</a>
                  </li>
                  <li>
                      
                      <a>微信公众号</a>
                  </li> 
                  <li>
                       <a>客服咨询</a>
                  </li> 
                  <li>
                      <a>新手指引</a>
                  </li> 
                  <li>
                      你好
                      <Button type="danger" ghost>退出</Button>
                  </li>
                <li>客服热线：400-115-8001</li>
              </ul>
          </div>
    );
  }
}

export default App;
