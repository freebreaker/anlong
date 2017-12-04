import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import TabBottom from "../../pubComponents/TabBottom";
import Modal from "../../pubComponents/Modal";
// import axios from 'axios'
// import "./Register.css"
// const FormItem = Form.Item;
// import FormRegister from "./FormRegister"

class Homepage extends Component{

      render() {

        return (
            <div>
                <Modal></Modal>
                <TabBottom/>
            </div>
        );
      }
}

export default Homepage