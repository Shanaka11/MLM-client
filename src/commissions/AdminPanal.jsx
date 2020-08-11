import React, { useState, useContext } from 'react'
import {ReactComponent as AddSales} from '../Icons/recurring_subscription.svg'
import {ReactComponent as Sales} from '../Icons/diary.svg'
import {ReactComponent as AddSalespersonI} from '../Icons/male_add.svg'
import {ReactComponent as Salespersons} from '../Icons/contract_agreement.svg'
import {BtnCard} from '../components'

import {NewSales, NewSalesperson} from '../commissions/modals'
import {Input} from '../components'

import {useHistory} from "react-router-dom"
import {SalesContext} from "../context"

const AdminPanal = () => {

    const { addSales, addSalesperson } = useContext(SalesContext)

    const handleAddSale = () => {
        const data = {
            salesperson: sales.salespersonId,
            total: sales.totalSales,
            commission_perc: sales.commission
        }
        addSales(data)
    }

    const handleAddSalesperson = () => {
        const data = {
            name: salesperson.name,
            address: salesperson.address,
            cell: salesperson.cell,
            sponser: salesperson.sponserId,
            realestate_id: salesperson.realestateId,
            qualification: salesperson.qualification,
            username: salesperson.username,  
            email: salesperson.email          
        }

        addSalesperson(data)
    }

    let history = useHistory()

    const [modal, setModal] = useState({
        newSale: false,
        newSalespersons: false
    })

    const [sales, setSales] = useState({
        salespersonId: "",
        totalSales: "",
        commission: ""
    })

    const [salesperson, setSalesperson] = useState({
        name: "",
        address: "",
        cell:"",
        sponser:"",
        realestateId:"",
        qualification: "",
        username: "",
        email: ""
    })

    const setNew = (name) => {
        setModal(prevValue => {
            return {
                ...prevValue,
                [name]: !prevValue[name]
            }
        })
    }

    const handleChangeSales = (event) => {

        const {name, value} = event.target

        setSales(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    
    const handleChangeSalesperson = (event) => {
        const {name, value} = event.target

        setSalesperson(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })        
    }

    const redirect = (name) => {
        if(name === "SalesList"){
            history.push("/admin/sales")
        }else{
            history.push("/admin/salesperson")
        }
    }

    return (
        <div className="container">
            <h1>Admin Interface</h1>
            <div className="row margin-t-10">
                <div className="col-3 d-flex center">
                    <BtnCard name="newSale" onClickHandler={setNew}>
                        <AddSales className="icon"/>
                        <h4 className="btn-card-header">Add Sales</h4>
                        <p className="btn-card-desc">Add a New Sale</p>
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard name="SalesList" onClickHandler={redirect}>
                        <Sales className="icon"/>
                        <h4 className="btn-card-header">View Sales</h4>
                        <p className="btn-card-desc">Show a list of all sales</p>
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard name="newSalespersons" onClickHandler={setNew}>
                        <AddSalespersonI className="icon"/>
                        <h4 className="btn-card-header">Add Salesperson</h4>
                        <p className="btn-card-desc">Add a new Salesperson</p>                        
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard name="SalespersonList" onClickHandler={redirect}>
                        <Salespersons className="icon"/>
                        <h4 className="btn-card-header">View Salesperson List</h4>
                        <p className="btn-card-desc">Show a list of all Salesperson</p>      
                    </BtnCard>
                </div>                                
            </div>
            {/* Add Sales and Salesperson Dialogs */}
            {modal.newSale && 
                <NewSales name="newSale" show={modal.newSale} handleClose={setNew} onSubmit={handleAddSale}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSales}
                                name = "salespersonId" 
                                placeholder="Salesperson Id" 
                                initialValue={sales.salespersonId} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "totalSales"
                                placeholder="Total Sales" 
                                initialValue={sales.totalSales} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "commission"
                                placeholder="Commissions" 
                                initialValue={sales.commission} 
                                reset="FALSE"
                                required/>
                    </div>                                       
                </NewSales>
            }
            {modal.newSalespersons && 
                <NewSalesperson  name="newSalespersons" show={modal.newSalespersons} handleClose={setNew} onSubmit={handleAddSalesperson}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson}
                                name = "name" 
                                placeholder="Name" 
                                initialValue={salesperson.name} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "address"
                                placeholder="Address" 
                                initialValue={salesperson.address} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "cell"
                                placeholder="Cell" 
                                initialValue={salesperson.cell} 
                                reset="FALSE"
                                required/>
                    </div>           
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "sponser"
                                placeholder="Sopnser ID" 
                                initialValue={salesperson.sponserId} 
                                reset="FALSE"/>
                    </div>  
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "realestate"
                                placeholder="Real Estate ID" 
                                initialValue={salesperson.realestateId} 
                                reset="FALSE"/>
                    </div>    
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "qualification"
                                placeholder="Qualification" 
                                initialValue={salesperson.qualification} 
                                reset="FALSE"/>
                    </div>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "username"
                                placeholder="Username" 
                                initialValue={salesperson.username} 
                                reset="FALSE"/>
                    </div>
                    <div className="input-group">
                        <Input  type="email" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "email"
                                placeholder="Email" 
                                initialValue={salesperson.email} 
                                reset="FALSE"/>
                    </div>                                                                                                               
                </NewSalesperson>
            }
        </div>
    )
}

export default AdminPanal
