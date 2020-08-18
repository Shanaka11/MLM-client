import React, { useState, useContext } from 'react'
import {Input, Checkbox} from '../components'
import {AuthenticationContext} from '../context'
import { useHistory } from 'react-router-dom'
import logo from "../img/logo.png"

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
        sponser: "",
        realestate_id: "",
        qualification: "",
        agreed: false
    })

    const [step, setStep] = useState(1)

    const handleNext = (event) => {
        event.preventDefault()
        setStep(2)
    }

    const handlCancle = (event) => {
        event.preventDefault()
        setStep(1)
        history.push("/")
    }
    const handleChange = (event) => {
        const {name, value} = event.target

        setState(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })        
    }

    // const handleAgreed = (event) => {
    //     const {value} = event.currentTarget.value
    //     setState(prevValue => {
    //         return{
    //             ...prevValue,
    //             agreed: value
    //         }
    //     })
    // }

    const handleRegister = (event) =>{
        event.preventDefault()

        const handleFrontend = (response, status) => {
            if(status === 201){
                history.push("/");
            }else{
                console.log(response)
            }
        }
        if(state.agreed) {
            register(handleFrontend, state)
        }else{
            alert("You must agree to the Agreement before registering")
        }
    }    

    return (
        <div className="container page-center">
            <div className="login-card my-4">
                <img className="login-logo" src={logo} alt="Logo"/>
                <form onSubmit={handleRegister}>
                    {step === 1 && 
                    <>
                        <div className="input-group">
                            <Input  type="text" 
                                    setFinalValue={handleChange}
                                    name = "username" 
                                    placeholder="ID (CPF)" 
                                    initialValue={state.username} 
                                    reset="FALSE"
                                    required
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    patternText="must be in xxx.xxx.xxx-xx format"/>
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
                    </>
                    }
                    {step === 2 && 
                    <>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "name" 
                                placeholder="Name" 
                                initialValue={state.first_name} 
                                reset="FALSE"
                                required/>
                    </div>    
                    {/* <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "address"
                                placeholder="Address" 
                                initialValue={state.address} 
                                reset="FALSE"
                                required/>
                    </div>     */}
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
                                name = "sponser"
                                placeholder="Sponser Id (CFP)" 
                                initialValue={state.sponser} 
                                reset="FALSE"/>
                    </div> 
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "realestate_id"
                                placeholder="Realestate Id" 
                                initialValue={state.realestate_id} 
                                reset="FALSE"/>
                    </div>   
                    {/* <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChange} 
                                name = "qualification"
                                placeholder="Qualification" 
                                initialValue={state.qualification} 
                                reset="FALSE"/>
                    </div>  */}
                    <div className="input-group link">
                        <p>Read the Agreement</p>
                    </div>  
                    <div className="input-group">
                        <Checkbox   label="I Agree to the Agreement"
                                    name="agreed"
                                    initialValue={state.agreed}
                                    handleChecked={handleChange}/>
                    </div>                    
                    </>
                    }                                                                                                                                                                                                     
                    <div className="input-group d-flex justify-center">
                        <div className="text-small pointer link" onClick={handlCancle}>Cancel</div>
                        { step === 1 ?
                            <button className="btn btn-login ml-auto" onClick={handleNext}>Next</button> :
                            <button className="btn btn-login ml-auto" type="submit">Register</button> 
                        }
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default Register
