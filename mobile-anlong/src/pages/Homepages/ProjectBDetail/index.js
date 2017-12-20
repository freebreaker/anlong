import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import "./index.css";

class ProjectBDetail extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
        urlName:''
    };
  }

  componentWillMount(){
      console.log(this.props.match.params.name)
      this.state.urlName = this.props.match.params.name
      //获ajax数据，然后渲染页面
  }

  render(){


      return(
          <div className="ProjectBDetail">
                ProjectBDetail
          </div>
      )
  }
}

export default ProjectBDetail