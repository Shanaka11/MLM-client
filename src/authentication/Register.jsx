import React, { useState, useContext } from 'react'
import {Input, Checkbox} from '../components'
import {AuthenticationContext} from '../context'
import { useHistory } from 'react-router-dom'
import logo from "../img/logo.png"
import {ApiGetDocument} from "../lookups"

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
        qualification: 0,
        agreed: false
    })

    const [step, setStep] = useState(1)

    // const handleNext = (event) => {
    //     event.preventDefault()
    //     setStep(2)
    // }

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

    const handleAgreement = () => {
        const handleFrontend = (response, status) => {
            if(status === 200){
                window.open(response[0].doc)
            }else{
                console.log(response)
                alert(response)
            }
        }
        ApiGetDocument(handleFrontend)
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
        if(step === 1){
            setStep(2)
        }else{
            if(state.agreed) {
                register(handleFrontend, state)
            }else{
                alert("You must agree to the Agreement before registering")
            }
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
                                    placeholder="Numero de CPF" 
                                    initialValue={state.username} 
                                    reset="FALSE"
                                    required />
                        </div>
                        <div className="input-group">
                            <Input  type="password" 
                                    setFinalValue={handleChange} 
                                    name = "password"
                                    placeholder="senha" 
                                    initialValue={state.password} 
                                    reset="FALSE"
                                    required/>
                        </div>   
                        <div className="input-group">
                            <Input  type="email" 
                                    setFinalValue={handleChange} 
                                    name = "email"
                                    placeholder="endereço de e-mail" 
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
                                placeholder="NomeCompleto" 
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
                                placeholder="Numero de whatsapp" 
                                initialValue={state.cell} 
                                reset="FALSE"
                                required/>
                    </div>    
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "sponser"
                                placeholder="Numero de CFP do recrutador" 
                                initialValue={state.sponser} 
                                reset="FALSE"/>
                    </div> 
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange} 
                                name = "realestate_id"
                                placeholder="Numero de Corrector" 
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
                    <div className="input-group link" onClick={handleAgreement}>
                        <p>Leia o acordo</p>
                    </div>  
                    <div className="input-group">
                        <Checkbox   label="Concordo"
                                    name="agreed"
                                    initialValue={state.agreed}
                                    handleChecked={handleChange}/>
                    </div>                    
                    </>
                    }                                                                                                                                                                                                     
                    <div className="input-group d-flex justify-center">
                        <div className="text-small pointer link" onClick={handlCancle}>Cancelar</div>
                        { step === 1 ?
                            // <button className="btn btn-login ml-auto" onClick={handleNext}>próximo</button>
                            <button className="btn btn-login ml-auto" type='submit'>próximo</button> :
                            <button className="btn btn-login ml-auto" type="submit">Registro</button> 
                        }
                    </div>                    
                </form>
            </div>            
        </div>
    )
}

export default Register
