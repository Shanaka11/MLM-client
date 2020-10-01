import React, {useState} from 'react'
import logo from "../img/logo.png"
import {Input} from '../components'
import {ApiReqResetPassword} from "../lookups"

const PasswordReset = () => {
    const [state, setState] = useState({
        username: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setState(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleOnSumbmit = (event) => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                alert(response.message)
            }else{
                alert("Unexpected Error, Please Try Again")
            }
        }
        ApiReqResetPassword(handleFrontend, state)
    }

    return (
        <div className="container page-center">
            <div className="login-card">
            <img className="login-logo" src={logo} alt="Logo"/>
                <form onSubmit={handleOnSumbmit}>
                <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "username" 
                                placeholder="Numero de CPF" 
                                initialValue={state.username} 
                                reset="FALSE"
                                required/>
                    </div>       
                    <div className="input-group d-flex justify-center">
                        <button className="btn btn-login ml-auto" type="submit">Reset Password</button>
                    </div>                                  
                </form>                
            </div>
        </div>
    )
}

export default PasswordReset
