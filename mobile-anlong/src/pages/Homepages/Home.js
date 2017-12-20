import React, { Component } from 'react';
import BannerCarousel from "./Home/Carousel"
import CarInfo from "./Home/CarInfo"
import axios from 'axios'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }


  componentDidMount(){

    let that = this

    axios.get('http://localhost:3003/GetProjectBListThree')
    .then(function (response) {

      that.setState({data:response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  render(){
    // let CarInfos=this.state.todoList.filter((item)=> !item.deleted && item.direction==="left").map((item,index)=>{
    //   return (<li key={index}>   
    //            <TodoItem todo={item} onToggle={this.toggle.bind(this)} 
    //            onDelete={this.delete.bind(this)}/>
    //         </li>)
    // })

    let CarInfos = [1].map((item,index)=>{
        return (
          <li key={index}> 
              <CarInfo url={111111111} name={2222222}/>
          </li>
        )
    })

    return(
        <div>
          <BannerCarousel/>
          <ul>
            {CarInfos}
          </ul>
        </div>
    )
  }
}

export default Home