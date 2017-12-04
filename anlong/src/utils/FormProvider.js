import React from "react"
import values from 'object.values';

export default function formProvider(fields){
    return function(WarppedComponent){
        const initFormState={}
        for(const key in fields){
            initFormState[key]={
                value:fields[key].value,
                error:""
            }
        }


        class FormComponent extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    form:initFormState,
                    formValid:false        //整个表单的valid
                }
            }


            handleChangeValue(key,e){
                const {form}=this.state
                const newField = {value: e.target.value, valid: true, error: ''}
                const fieldRules=fields[key].rules

                for(let i=0;i<fieldRules.length;i++){
                    const {pattern,error}=fieldRules[i]
                    
                    let valid=false

                    if (typeof pattern === 'function'){
                        valid=pattern(newField.value)
                    }else{
                        valid=pattern.test(newField.value)
                    }

                    if(!valid){
                        newField.valid=false
                        newField.error=error
                        break
                    }
                }

                const newForm={...form,[key]:newField}

                const formValid = Object.values(newForm).every(f => f.valid);


                this.setState({
                    form: newForm,
                    formValid
                })

            }

            setFormValue(value){
                 if(!value){
                     return 
                 }
                 const {form}=this.state
                 let newForm={...form}
                 for(const field in form){
                     if(form.hasOwnProperty(field)){
                         if(typeof value[field]!==undefined){
                            newForm[field] = {...newForm[field], value: value.data[field]};

                            newForm[field].valid = true
                         }
                     }
                 }
                 this.setState({form:newForm})

                 
            }


            render() {
                const {form,formValid}=this.state
                return <WarppedComponent {...this.props} form={form} formValid={formValid}
                setFormValue={this.setFormValue.bind(this)} 
                onFormChange={this.handleChangeValue.bind(this)}/> 
            }
        }

        return FormComponent



 }
}


