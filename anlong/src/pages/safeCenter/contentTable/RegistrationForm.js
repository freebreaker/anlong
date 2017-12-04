import React from "react"
import axios from "axios"
import { Form, Icon, Input, Button, Checkbox , Modal} from 'antd';
import formProvider from "../../../utils/FormProvider"
import './RegistrationForm.css';

const FormItem = Form.Item;

class RegistrationForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            form:{}       //整个表单的valid
        }
    }
 
    handleSubmit(e){
        
        const {form: {name, age, gender}, formValid,onFormChange ,editTarget} = this.props

        e.preventDefault()

        console.log(editTarget)

        if(!formValid){
            alert("请填写正确的信息")
            return
        }

        if (editTarget) {
            axios.put("http://localhost:3001/user/" + editTarget.data.id, {
                name: name.value,
                age: age.value,
                gender: gender.value
            })
                .then((res) => {
                    alert("修改成功")
                    console.log("edit1111111"+ res)
                })
        }else{
        axios.post("http://localhost:3001/user",{
            name:name.value,
            age:age.value,
            gender:gender.value
        })
        .then((res)=>{
            if(res.data.id){
                alert("add user successfully")

            }else{
                alert("添加失败")
            }
        })
        .catch((err) => console.error(err));
    }
    }

    componentWillMount () {
        const {editTarget, setFormValue} = this.props;
        if (editTarget) {
            setFormValue(editTarget);
        }
    }

    render(){
        const {form: {name, age, gender}, formValid,onFormChange} = this.props;
        return (
      <div>
        <header>
          <h1>安全认证</h1>
        </header>

        <main>
            <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
            >
          <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          {/* <FormItem>
            <label>姓名</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
            <br/>
          </FormItem>
            <label>身份证号</label>
                <Input type="text" onChange={onFormChange.bind(this,"id")} placeholder=""/>
                <span>{age.valid ? "": age.error}</span>
            <br/>
            <FormItem>
            <label>银行卡号</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
            <br/>
          </FormItem>
            <label>开户行</label>
            <select value={gender.value} onChange={onFormChange.bind(this,"gender")}>
               <option value="">请选择</option>
               <option value="ABC">中国农业银行</option>
               <option value="ICBC">中国工商银行</option>
            </select>
            <span>{gender.valid ? "": gender.error}</span>
            <FormItem>
            <label>开户地（省）</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
            <br/>
          </FormItem>
          <FormItem>
            <label>开户地（市）</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
            <br/>
          </FormItem>
          <FormItem>
            <label>交易密码</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
                <span>此密码用于第三方支付平台提现等操作！</span>
            <br/>
          </FormItem>
          <FormItem>
            <label>交易密码</label>
                <Input type="text" value={name.value} onChange={onFormChange.bind(this,"name")} placeholder=""
                />
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
                <span>此密码用于第三方支付平台提现等操作！</span>
            <br/>
          </FormItem>

            <br/>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">提交</Button> */}
          </Form>
          </Modal>
        </main>
      </div>
        )
    }
}

// RegistrationForm.contextTypes={
//     router:React.PropTypes.object.isRequired
// }

RegistrationForm = formProvider({
    name:{
        defaultValue:"",
        rules:[
            {
                pattern:(value)=>value.length>0,
                error:"请输入用户名"
            },
            {
                pattern: /^.{1,4}$/,
                error:"用户名最多四个字符"
            }
        ]
    },
    age:{
        defaultValue:0,
        rules:[
            {
                pattern:(value)=>value>0 && value<=100,
                error:"请输入0~100间的数字"
            }
        ]
    },

    gender:{
        defaultValue:"",
        rules:[{
            pattern:(value)=>!!value ,
            error:"请选择性别"


        }]
    }
})(RegistrationForm)

export default RegistrationForm