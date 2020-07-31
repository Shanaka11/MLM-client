import React, { useState } from 'react'
import {Input} from '../components'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLogin = (event) =>{
        event.preventDefault()
        console.log(username)
        console.log(password)
    }

    return (
        <div className="container page-center">
            <div className="login-card">
                Sign In
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={setUsername} 
                                placeholder="Username" 
                                initialValue={username} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="password" 
                                setFinalValue={setPassword} 
                                placeholder="Password" 
                                initialValue={password} 
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
