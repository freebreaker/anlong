import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import "./Register.css"
const FormItem = Form.Item;
// import FormRegister from "./FormRegister"

class Register extends Component{


    componentWillMount(){
        console.log(this.props)
    }

     handleSubmit = (e) => {
        e.preventDefault();
        let history = this.props.history
        console.log(history)
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
            console.log(values)

            axios.post('http://localhost:3002/user', values)
              .then(function (response) {
                console.log(response);
                history.push("/home")
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        });
      }

      render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox className='login-form-remember'>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <a href="">注册</a>
                    </FormItem>
                </Form>
        );
      }
}

const RegisterForm = Form.create()(Register)

export default RegisterForm