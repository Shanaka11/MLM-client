import React, { useState, useContext, useEffect } from 'react'
import {Input} from '../components'
import { AuthenticationContext, SalesContext } from '../context'

const Settings = () => {

    const {role, username, email, updateUser} = useContext(AuthenticationContext)
    const {salesperson, updateSalesperson} = useContext(SalesContext)

    const [state, setState] = useState({
        username: "",
        password: "",
        email: "",
        salesperson_id: "",
        name: "",
        address: "",
        cell: "",
        sponser: "",
        realestate_id: "",
        qualification: "",
        panal: "user"
    })

    useEffect(() => {
        if(salesperson){
            setState(prevValue => {
                return{
                    ...prevValue,
                    salesperson_id: salesperson.id,
                    name: salesperson.name,
                    address: salesperson.address,
                    cell: salesperson.cell,
                    sponser: salesperson.sponser ? salesperson.sponser.id : "",
                    realestate_id: salesperson.realestate_id,
                    qualification: salesperson.qualification
                }
            }) 
        }

        if(username){
            setState(prevValue => {
                return{
                    ...prevValue,
                    username: username,
                }
            })
        }
        if(email){
            setState(prevValue => {
                return{
                    ...prevValue,
                    email: email
                }
            })
        }
    }, [salesperson, username, email])

    const handleStateChange = (event) => {
        const {name, value} = event.target
        setState(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        }) 
    }

    const handlePanalChange = (event) => {
        if(event.currentTarget.getAttribute("data-name") === "user"){
            setState(prevValue => {
                return{
                    ...prevValue,
                    panal: "user"
                }
            })
        }else{
            setState(prevValue => {
                return{
                    ...prevValue,
                    panal: "salesperson"
                }
            })            
        }
    }

    const handleUserSubmit = (event) => {
        event.preventDefault()
        const data = {
            type: "email",
            username: username,
            email: state.email
        }

        // Update Email
        updateUser(data)
    }

    const handlePasswordSubmit = (event) => {
        event.preventDefault()
        const data = {
            type: "password",
            username: username,
            password: state.password
        }
        // Update Password
        updateUser(data)
    }

    const handleSalespersonSubmit = (event) => {
        event.preventDefault()
        const data = {
            id: salesperson.id,
            name: state.name,
            address: state.address,
            cell: state.cell,
            sponser: state.sponser.id,
            realestate_id: state.realestate_id,
            qualification: state.qualification            
        }
        updateSalesperson(data)
    }

    return (
        <div className="container">
            <h1>Settings</h1>
            <div className="row">
                <div className="col-12 col-md-3 mb-4">
                    <div className="list">
                        <div className="list-item py-4" onClick={handlePanalChange} data-name="user">
                            <div>User</div>
                            <div className="small">Change User account details</div>
                        </div>
                        { role === "CLIENT" && 
                            <div className="list-item py-4" onClick={handlePanalChange} data-name="salesperson">
                                <div>Salesperson</div>
                                <div className="small">Change Salesperson details</div>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-9 mb-4">
                    <div className="list">
                        {/* User Settings */}
                        {state.panal === "user" && 
                            <div className="list-item py-4 list-item-card">
                                <form onSubmit={handleUserSubmit}>
                                    <div className="input-group">
                                        <Input  type="email" 
                                                setFinalValue={handleStateChange}
                                                name = "email" 
                                                placeholder="Email" 
                                                initialValue={email} 
                                                reset="FALSE"
                                                required/>
                                    </div>   
                                    <div className="input-group d-flex justify-center">
                                        <button className="btn btn-login ml-auto" type="submit">Save Changes</button>
                                    </div>                                                                                                 
                                </form>
                                <form onSubmit={handlePasswordSubmit}>
                                    <p>Change the current password</p>
                                    <div className="input-group">
                                        <Input  type="password" 
                                                setFinalValue={handleStateChange}
                                                name = "password" 
                                                placeholder="New Password" 
                                                initialValue={state.password} 
                                                reset="FALSE"
                                                required/>
                                    </div> 
                                    <div className="input-group d-flex justify-center">
                                        <button className="btn btn-login ml-auto" type="submit">Change Password</button>
                                    </div>                                                                   
                                </form>
                            </div>
                        }
                        {/* Salesperson Settings */}
                        { role === "CLIENT" && state.panal === "salesperson" &&
                            <div className="list-item py-4 list-item-card">
                                <form onSubmit={handleSalespersonSubmit}>
                                    <div className="input-group">
                                        <Input  type="text" 
                                                setFinalValue={handleStateChange}
                                                name = "name" 
                                                placeholder="Name" 
                                                initialValue={state.name} 
                                                reset="FALSE"
                                                required/>
                                    </div>
                                    <div className="input-group">
                                        <Input  type="text" 
                                                setFinalValue={handleStateChange} 
                                                name = "address"
                                                placeholder="Address" 
                                                initialValue={state.address} 
                                                reset="FALSE"
                                                required/>
                                    </div>
                                    <div className="input-group">
                                        <Input  type="text" 
                                                setFinalValue={handleStateChange} 
                                                name = "cell"
                                                placeholder="Cell" 
                                                initialValue={state.cell} 
                                                reset="FALSE"
                                                required/>
                                    </div>           
                                    <div className="input-group">
                                        <Input  type="text" 
                                                setFinalValue={handleStateChange} 
                                                name = "sponserId"
                                                placeholder="Sopnser ID" 
                                                initialValue={state.sponser} 
                                                reset="FALSE"
                                                required/>
                                    </div>  
                                    <div className="input-group">
                                        <Input  type="text" 
                                                setFinalValue={handleStateChange} 
                                                name = "realestateId"
                                                placeholder="Real Estate ID" 
                                                initialValue={state.realestate_id} 
                                                reset="FALSE"
                                                required/>
                                    </div>  
                                    <div className="input-group">
                                        <Input  type="number" 
                                                setFinalValue={handleStateChange} 
                                                name = "qualification"
                                                placeholder="Qualification" 
                                                initialValue={state.qualification} 
                                                reset="FALSE"
                                                required/>
                                    </div>
                                    <div className="input-group d-flex justify-center">
                                        <button className="btn btn-login ml-auto" type="submit">Save Changes</button>
                                    </div>                                  
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
