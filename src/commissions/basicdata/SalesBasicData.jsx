import React, { useState } from 'react'
import {ReactComponent as Search} from '../../Icons/search.svg'
import {ReactComponent as AddSales} from '../../Icons/recurring_subscription.svg'
import {BtnListHeader, Input} from '../../components'
import {NewSales, EditSales} from '../modals'

const SalesBasicData = () => {

    const [modalState, setModalState] = useState({
        newSale: false,
        editSale: false
    })

    const [sales, setSales] = useState({
        saleId: "",
        salespersonId: "",
        totalSales: "",
        commission: ""
    })

    const handleSalesModal = (name) => {        
        setModalState(prevValue => {
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

    const handleItemOnClick = (event) => {
        // console.log(event.currentTarget.getAttribute("data-item"))
        let item = event.currentTarget.getAttribute("data-item") 
        item = JSON.parse(item)
        setSales( prevValue => {
            return {
                ...prevValue,
                "saleId": item.saleId,
                "salespersonId": item.salespersonId,
                "totalSales": item.totalSales,
                "commission": item.commission
            }
        })        
        handleSalesModal('editSale')
    }

    return (
        <div className="container">
            <div className="d-flex">
                <h1>Sales List</h1>
                {/* <button className="list-header-btn-expand ml-auto"><AddSales className="list-header-icon"/><h4 className="ml-4">Add a Sale</h4></button> */}
                <BtnListHeader onClickHandler={handleSalesModal} name="newSale">
                    <AddSales className="list-header-icon"/>
                    <h4 className="ml-4">Add a Sale</h4>
                </BtnListHeader>
            </div>
            {/* Search */}
            <div className="list-search">
                <input className="input-control list-search-input" type="text"/>
                <button className="list-btn"><Search className="list-icon"/></button>
            </div>
            {/* List */}
            <div className="list">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3">
                            <h5>Sale ID</h5>
                        </div>
                        <div className="col-3">
                            <h5>Salesperson ID</h5>
                        </div>
                        <div className="col-3 text-right">
                            <h5>Total</h5>
                        </div>
                        <div className="col-3 text-right">
                            <h5>Commission</h5>
                        </div>
                    </div>
                </div>
                <div className="list-item" onClick={handleItemOnClick} data-item={JSON.stringify({saleId: "1", salespersonId:"3321", totalSales: "5632.00", commission: "5"})}>
                    <div className="row">
                        <div className="col-3">
                            <p>1</p>
                        </div>
                        <div className="col-3">
                            <p>3321</p>
                        </div>
                        <div className="col-3 text-right">
                            <p>5632.00</p>
                        </div>
                        <div className="col-3 text-right">
                            <p>5%</p>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                <div className="row">
                        <div className="col-3">
                            <p>2</p>
                        </div>
                        <div className="col-3">
                            <p>65124</p>
                        </div>
                        <div className="col-3 text-right">
                            <p>230.32</p>
                        </div>
                        <div className="col-3 text-right">
                            <p>12%</p>
                        </div>
                    </div>
                </div>            
            </div>
            {modalState.newSale && 
                <NewSales name="newSale" show={modalState.newSale} handleClose={handleSalesModal}>
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
            {modalState.editSale &&
                <EditSales name="editSale" show={modalState.editSale} handleClose={handleSalesModal} id={sales.saleId}>
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
                </EditSales>
            }            
        </div>
    )
}

export default SalesBasicData
