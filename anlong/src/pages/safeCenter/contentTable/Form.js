
import React from "react"
import { Button, Modal, Form, Input,Select } from 'antd';
import "./Form.css"
const FormItem = Form.Item;





class FormCollection extends React.Component{
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
    <div>
        <button className="idSecurity" type="primary" onClick={this.showModal}>安全认证</button>
        <Modal      className="idmodal"
                    visible={this.state.visible}
                    title="安全验证"
                    okText="确定"
                    onCancel={this.handleCancel}
                    onOk={this.handleCreate}
                    footer={null}>
            <form className="idformtable" layout="vertical">
            <div className="control-group">
            <label className="control-label"><span className="text-error">*</span> 姓名</label>
            <input />
         </div>
                <div className="control-group">
                    <label className="control-label"><span className="text-error">*</span> 身份证号</label>
                    <input />
                 </div>
                 <div className="control-group">
                    <label className="control-label"><span className="text-error">*</span> 银行卡号</label>
                    <input />
                 </div>
                 <div className="control-group">
                    <label className="control-label"><span className="text-error">*</span> 开户行</label>
                    <div className="controls">
                        <select data-val="true" data-val-required="请选择开户行！" id="BankCode" name="BankCode"><option value="">请选择！</option>
                            <option value="0102">中国工商银行</option>
                            <option value="0103">中国农业银行</option>
                            <option value="0104">中国银行</option>
                            <option value="0105">中国建设银行</option>
                            <option value="0301">中国交通银行</option>
                            <option value="0302">中信实业银行</option>
                            <option value="0303">中国光大银行</option>
                            <option value="0304">华夏银行</option>
                            <option value="0305">中国民生银行</option>
                            <option value="0306">广东发展银行</option>
                            <option value="0307">平安银行</option>
                            <option value="0308">招商银行</option>
                            <option value="0309">兴业银行</option>
                            <option value="0310">上海浦东发展银行</option>
                            <option value="0403">中国邮政储蓄银行</option>
                        </select>
                        <span className="field-validation-valid" data-valmsg-for="BankCode" data-valmsg-replace="true"></span>
                    </div>
                </div>
                <div className="control-group">
                <label className="control-label"><span className="text-error">*</span> 开户地（省）</label>
                <div className="controls">
                <select data-filter="#CityCode" name="ProvinceCode" data-value="3000" aria-invalid="false" className="valid">
            </select>
                    <span className="field-validation-valid" data-valmsg-for="BankCode" data-valmsg-replace="true"></span>
                </div>
            </div>
            <div className="control-group">
            <label className="control-label"><span className="text-error">*</span> 开户地（市）</label>
            <div className="controls">
            <select name="CityCode" id="CityCode" data-val="true" data-val-required="请选择开户地！" data-value="3120" aria-required="true" aria-invalid="false" aria-describedby="CityCode-error CityCode-error" className="valid">

        </select>
                <span className="field-validation-valid" data-valmsg-for="BankCode" data-valmsg-replace="true"></span>
            </div>
        </div>
        <div className="control-group">
                    <label className="control-label"><span className="text-error">*</span> 交易密码</label>
                    <input />
                    <p>此密码用于第三方支付平台提现等操作！</p>
        </div>
        <div className="control-group">
                    <label className="control-label">验证码</label>
                    <input placeholder="请输入下图验证信息"/>
        </div>
        <div className="control-group">
            <button className="idSecurity" type="primary" onClick={this.handleCancel}>提 交</button>
        </div>
 

            </form>
        </Modal>
    </div>
        )
    }
}

export default FormCollection