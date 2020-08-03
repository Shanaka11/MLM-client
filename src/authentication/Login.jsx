import React, { useState, useEffect } from 'react'
import {Input} from '../components'
import { useHistory } from 'react-router-dom'

const Login = () => {
    // Replace this with context
    const [logged, setLogged] = useState(true)
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
        console.log(credentials.username)
        console.log(credentials.password)
    }

    useEffect(() => {
        if(logged){
            history.push("/admin/")
        }
    })

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
