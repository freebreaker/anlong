
import React from "react"
import { Button, Modal, Form, Input,Select } from 'antd';
import "./Form.css"
const FormItem = Form.Item;





class AccountTableButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false
        }
    }

    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        this.setState({ visible: false });
    }
    

    render(){
        return (
    <div className="accountbutton">
        <button className="idSecurity" type="primary" onClick={this.showModal}>安全认证</button>
    </div>
        )
    }
}

export default AccountTableButton