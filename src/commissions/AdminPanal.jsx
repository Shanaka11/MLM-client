import React, { useState } from 'react'
import {ReactComponent as AddSales} from '../Icons/recurring_subscription.svg'
import {ReactComponent as Sales} from '../Icons/diary.svg'
import {ReactComponent as AddSalesperson} from '../Icons/male_add.svg'
import {ReactComponent as Salespersons} from '../Icons/contract_agreement.svg'
import {BtnCard} from '../components'

import {NewSales, NewSalesperson} from '../commissions/modals'
import {Input} from '../components'

import {useHistory} from "react-router-dom"

const AdminPanal = () => {

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
        sponserId:"",
        realestateId:""
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

    const redirect = (event) => {
        if(event.name === "SalesList"){
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
                        <AddSalesperson className="icon"/>
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
                <NewSales name="newSale" show={modal.newSale} handleClose={setNew}>
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
                <NewSalesperson  name="newSalespersons" show={modal.newSalespersons} handleClose={setNew}>
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
                                reset="FALSE"
                                required/>
                    </div>  
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "realestate"
                                placeholder="Real Estate ID" 
                                initialValue={salesperson.realestateId} 
                                reset="FALSE"
                                required/>
                    </div>                                                       
                </NewSalesperson>
            }
        </div>
    )
}

export default AdminPanal
