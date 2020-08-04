import React, { useState, useContext } from 'react'
import {Input} from '../components'
import {AuthenticationContext} from '../context'


const Login = () => {

    const { logIn } = useContext(AuthenticationContext)

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

    return (
        <div className="container page-center">
            <div className="login-card">
                Sign In
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
                        <div className="text-small pointer">Forgot Password ?</div>
                        <button className="btn btn-login ml-auto" type="submit">Log In</button>
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default Login
