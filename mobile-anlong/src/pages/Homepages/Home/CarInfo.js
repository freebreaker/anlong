import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import "./carinfo.css";
import {withRouter,Link} from "react-router-dom";
class CarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render(){
      let name = this.props.name
      
      console.log(name)

      return(
          <div className="CarInfo">
                <Link to={{
                        pathname: `ProjectBDetail/${name}`,
                        state: 'hello',
                        }}>立即投资
                </Link> 
          </div>
      )
  }
}

export default withRouter(CarInfo)