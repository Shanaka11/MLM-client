import React, { useState, useContext, useEffect } from 'react'
import {Input} from '../components'
import {AuthenticationContext} from '../context'
import { useHistory } from 'react-router-dom'
import logo from "../img/logo.png"
import {ApiGetImages} from "../lookups"
import {Slide} from 'react-slideshow-image'
import {ImageSlider} from '../components'
// import 'react-slideshow-image/dist/styles.css'


const Login = () => {

    const { logIn } = useContext(AuthenticationContext)
    const history = useHistory()
    
    const [ads, setAds] = useState([])

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

    useEffect(() => {

        const handleFrontend = (response, status) => {
            let tempList = response
            setAds(tempList)
        }

        ApiGetImages(handleFrontend)

    }, [])

    return (<>      
        {/* Make an image slider here */}
            {ads.length > 0 && 
            <ImageSlider imageList={ads} />
        }         
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
                                placeholder="ID (CPF)" 
                                initialValue={credentials.username} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="password" 
                                setFinalValue={handleChange} 
                                name = "password"
                                placeholder="Senha" 
                                initialValue={credentials.password} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group d-flex justify-center">
                        <div className="text-small pointer link" onClick={ registerHandle }>Create Account</div>
                        {/* Log In */}
                        <button className="btn btn-login ml-auto" type="submit">Entrar</button>
                    </div>                    
                </form>
            </div>            
        </div>
        </>
    )
}

export default Login
