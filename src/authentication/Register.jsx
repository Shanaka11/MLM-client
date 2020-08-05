import React, { useState, useContext } from 'react'
import {Input} from '../components'
import {AuthenticationContext} from '../context'
import { useHistory } from 'react-router-dom'

const Register = () => {

    const { register } = useContext(AuthenticationContext)
    const history = useHistory()

    const [state, setState] = useState({
        username: "",
        password: "",
        first_name: "",
        email: "",
        address: "",
        cell: "",
        spnonserid: "",
        realestateid: ""
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

    const handleRegister = (event) =>{
        event.preventDefault()

        const handleFrontend = (response, status) => {
            if(status === 201){
                history.push("/");
            }else{
                console.log(response)
            }
        }

        register(handleFrontend, state)
    }    

    return (
        <div className="container page-center">
            <div className="login-card">
                Register
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "username" 
                                placeholder="Username" 
                                initialValue={state.username} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "name" 
                                placeholder="Name" 
                                initialValue={state.first_name} 
                                reset="FALSE"
                                required/>
                    </div>                    
                    <div className="input-group">
                        <Input  type="password" 
                                setFinalValue={handleChange} 
                                name = "password"
                                placeholder="Password" 
                                initialValue={state.password} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="email" 
                                setFinalValue={handleChange} 
                                name = "email"
                                placeholder="Email" 
                                initialValue={state.email} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "address"
                                placeholder="Address" 
                                initialValue={state.address} 
                                reset="FALSE"
                                required/>
                    </div>    
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "cell"
                                placeholder="Cell" 
                                initialValue={state.cell} 
                                reset="FALSE"
                                required/>
                    </div>    
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "sponserid"
                                placeholder="Sponser Id" 
                                initialValue={state.spnonserid} 
                                reset="FALSE"/>
                    </div> 
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "realestateid"
                                placeholder="Realestate Id" 
                                initialValue={state.realestateid} 
                                reset="FALSE"/>
                    </div>                                                                                                
                    <div className="input-group d-flex justify-center">
                        <button className="btn btn-login ml-auto" type="submit">Register</button>
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default Register
