import React, {useState, useContext} from 'react'
import {Input} from '../components'
import { useHistory } from 'react-router-dom'
import { AuthenticationContext } from '../context'

const CreateAdmin = () => {

    const { registerAdmin } = useContext(AuthenticationContext)
    const history = useHistory()

    const [state, setState] = useState({
        username: "",
        password: "",
        first_name: "",
        email: "",
        cell: ""
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
                history.push("/ADMIN/");
            }else{
                console.log(response)
            }
        }

        registerAdmin(handleFrontend, state)
    }

    return (
        <div className="container page-center">
            <div className="login-card">
                configurações
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "username" 
                                placeholder="Numero de CPF" 
                                initialValue={state.username} 
                                reset="FALSE"
                                required />
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "name" 
                                placeholder="NomeCompleto" 
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
                                name = "cell"
                                placeholder="Numero de whatsapp" 
                                initialValue={state.cell} 
                                reset="FALSE"
                                required/>
                    </div>                                                                                                          
                    <div className="input-group d-flex justify-center">
                        <button className="btn btn-login ml-auto" type="submit">Registro</button>
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default CreateAdmin
