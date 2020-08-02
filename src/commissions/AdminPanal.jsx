import React, { useState } from 'react'
import {ReactComponent as AddSales} from '../Icons/recurring_subscription.svg'
import {ReactComponent as Sales} from '../Icons/diary.svg'
import {ReactComponent as AddSalesperson} from '../Icons/male_add.svg'
import {ReactComponent as Salespersons} from '../Icons/contract_agreement.svg'
import {BtnCard} from '../components'

import {NewSales} from '../commissions/modals'
import {Input} from '../components'

const AdminPanal = () => {

    const [modal, setModal] = useState({
        newSale: false,
        newSalesperson: false
    })

    const [sales, setSales] = useState({
        salespersonId: "",
        totalSales: "",
        commission: ""
    })

    const setNew = (name) => {
        setModal(prevValue => {
            return {
                ...prevValue,
                [name]: !prevValue[name]
            }
        })
    }

    const handleChange = (event) => {

        const {name, value} = event.target

        setSales(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
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
                    <BtnCard>
                        <Sales className="icon"/>
                        <h4 className="btn-card-header">View Sales</h4>
                        <p className="btn-card-desc">Show a list of all sales</p>
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard name="newSalesperson" onClickHandler={setNew}>
                        <AddSalesperson className="icon"/>
                        <h4 className="btn-card-header">Add Salesperson</h4>
                        <p className="btn-card-desc">Add a new Salesperson</p>                        
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard>
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
                                setFinalValue={handleChange}
                                name = "salespersonId" 
                                placeholder="Salesperson Id" 
                                initialValue={sales.salespersonId} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChange} 
                                name = "totalSales"
                                placeholder="Total Sales" 
                                initialValue={sales.totalSales} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChange} 
                                name = "commission"
                                placeholder="Commissions" 
                                initialValue={sales.commission} 
                                reset="FALSE"
                                required/>
                    </div>                                       
            </NewSales>
            }
        </div>
    )
}

export default AdminPanal
