import React, { Component } from 'react';
import { createStore } from 'redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import TabBottom from "../../pubComponents/TabBottom";
import Modal from "../../pubComponents/Modal";
import store from "../../store"
// import axios from 'axios'
// import "./Register.css"
// const FormItem = Form.Item;
// import FormRegister from "./FormRegister"

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ifShowModal:false,
            ModalStyle:{
                backgroundImage:'url(../img/5.png)'
            }
        };
      }

      componentWillMount(){
        this.state.ifShowModal = store.getState().update.ifShowModal
      }

      render() {

        return (
            <div>
                {this.state.ifShowModal?<Modal style={this.state.ModalStyle}></Modal>:""}
                <TabBottom/>
            </div>
        );
      }
}

export default Homepage