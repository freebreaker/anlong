import React, { Component } from 'react';
import "./Modal.css"
class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            ifShow:true,
            ButtonValue:this.props.ButtonValue
        }
    }


    hideModal(){
    let newStatus = !this.state.ifShow
    this.setState({
        ifShow:newStatus
    })
  }


  render() {
      const ActivityLink = this.props.ActivityLink
    return (
        this.state.ifShow?<div id="modal-1" className="modal-dialog">
            <div className="cover" onClick={this.hideModal.bind(this)}></div>
            <div className="modal-ct">
                <div className="content">
                    <a href={ActivityLink} target="view_window">{this.state.ButtonValue}</a>
                </div>
            </div>  
        </div>:null
    );
  }
} 

export default Modal;