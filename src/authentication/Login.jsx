import React, { useState, useContext } from 'react'
import {Input} from '../components'
import {AuthenticationContext} from '../context'
import { useHistory } from 'react-router-dom'
import logo from "../img/logo.png"


const Login = () => {

    const { logIn } = useContext(AuthenticationContext)
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        username : "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setCredentials(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleLogin = (event) =>{
        event.preventDefault()
        logIn(credentials)
    }

    const registerHandle = (event) => {
        history.push("/register")
    }

    return (
        <div className="container page-center">
            <div className="login-card">
                {/* Add the logo */}
                <img className="login-logo" src={logo} alt="Logo"/>
                {/* Sign In */}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "username" 
                                placeholder="Username" 
                                initialValue={credentials.username} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="password" 
                                setFinalValue={handleChange} 
                                name = "password"
                                placeholder="Password" 
                                initialValue={credentials.password} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group d-flex justify-center">
                        <div className="text-small pointer link" onClick={ registerHandle }>Create Account</div>
                        <button className="btn btn-login ml-auto" type="submit">Log In</button>
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default Login
