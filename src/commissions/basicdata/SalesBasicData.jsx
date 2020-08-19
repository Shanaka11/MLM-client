import React, { useState, useContext, useEffect } from 'react'
import {ReactComponent as Search} from '../../Icons/search.svg'
import {ReactComponent as AddSales} from '../../Icons/recurring_subscription.svg'
import {BtnListHeader, Input} from '../../components'
import {NewSales, EditSales} from '../modals'

import {SalesContext} from "../../context"

const SalesBasicData = () => {

    const { salesList, getSales, addSales, removeSales, updateSales, searchSales} = useContext(SalesContext)
    const [ search, setSearch ] = useState("")
    // Get Sales
    useEffect(()=>{
        getSales()
    }, [])

    // Add Sales
    const handleAddSale = () => {
        const data = {
            salesperson: sales.salespersonId,
            total: sales.totalSales,
            commission_perc: sales.commission,
            sales_id: sales.sales_id
        }
        addSales(data)
    }
    // Update Sales
    const handleEditSale = () => {
        const data = {
            id: sales.saleId,
            salesperson: sales.salespersonId,
            total: sales.totalSales,
            commission_perc: sales.commission,
            sales_id: sales.sales_id
        }
        updateSales(data)
    }
    // Remove Sales
    const handleDelSale = () => {
        const data = {
            id: sales.saleId,
            salesperson: sales.salespersonId,
            total: sales.totalSales,
            commission_perc: sales.commission,
            sales_id: sales.sales_id
        }         
        removeSales(data)
    }

    const [modalState, setModalState] = useState({
        newSale: false,
        editSale: false
    })

    const [sales, setSales] = useState({
        saleId: "",
        salespersonId: "",
        totalSales: "",
        commission: "",
        sales_id: ""
    })

    const resetSales = () => {
        setSales({
            saleId: "",
            salespersonId: "",
            totalSales: "",
            commission: "",
            sales_id: ""            
        })
    }

    const handleSalesModal = (name) => {        
        if(name === "newSale"){
            ResetSales()
        }        
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
    
    const ResetSales = () => {
        setSales(prevValue => {
            return {
                ...prevValue,
                saleId: "",
                salespersonId: "",
                totalSales: "",
                commission: "",
                sales_id: ""
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
                "saleId": item.id,
                "salespersonId": item.salesperson,
                "totalSales": item.total,
                "commission": item.commission_perc,
                "sales_id": item.sales_id
            }
        })        
        handleSalesModal('editSale')
    }

    const handleSearch = (event) => {
        event.preventDefault()
        if(search === ""){
            getSales()
        }else{
            searchSales(search)
        }        
    }

    const handleOnChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="container">
            <div className="d-flex">
                <h1>Lista de Vendas</h1>
                {/* <button className="list-header-btn-expand ml-auto"><AddSales className="list-header-icon"/><h4 className="ml-4">Add a Sale</h4></button> */}
                <BtnListHeader onClickHandler={handleSalesModal} name="newSale">
                    <AddSales className="list-header-icon"/>
                    <h4 className="ml-4">adicione uma venda</h4>
                </BtnListHeader>
            </div>
            {/* Search */}
            <form onSubmit={handleSearch} className="list-search">
                <input  className="input-control list-search-input" 
                        type="text" 
                        onChange={handleOnChange} 
                        value={search}/>
                <button className="list-btn" type="submit"><Search className="list-icon"/></button>
            </form>
            {/* List */}
            <div className="list">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3">
                            <h5>Factura</h5>
                        </div>
                        <div className="col-3">
                            <h5>Corrector ID - CPF</h5>
                        </div>
                        <div className="col-3 text-right">
                            <h5>Total da Venda</h5>
                        </div>
                        <div className="col-3 text-right">
                            <h5>Total de Comissao</h5>
                        </div>
                    </div>
                </div>
                {salesList.map((item, index) => {
                    return (
                        <div className="list-item" key={index} onClick={handleItemOnClick} data-item={JSON.stringify(item)}>
                            <div className="row">
                                <div className="col-3">
                                    <p>{item.sales_id}</p>
                                </div>
                                <div className="col-3">
                                    <p>{item.salesperson_cpf}</p>
                                </div>
                                <div className="col-3 text-right">
                                    <p>{item.total}</p>
                                </div>
                                <div className="col-3 text-right">
                                    <p>{item.commission_perc}</p>
                                </div>
                            </div>
                        </div>  
                    )
                })}         
            </div>
            {modalState.newSale && 
                <NewSales name="newSale" show={modalState.newSale} handleClose={handleSalesModal} onSubmit={handleAddSale} onReset={resetSales}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSales}
                                name = "salespersonId" 
                                placeholder="Corrector Id" 
                                initialValue={sales.salespersonId} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "totalSales"
                                placeholder="Total da Venda" 
                                initialValue={sales.totalSales} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "commission"
                                placeholder="Total de Comissao" 
                                initialValue={sales.commission} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "sales_id"
                                placeholder="Factura" 
                                initialValue={sales.sales_id} 
                                reset="FALSE"
                                required/>
                    </div>                                                      
                </NewSales>
            }
            {modalState.editSale &&
                <EditSales name="editSale" show={modalState.editSale} handleClose={handleSalesModal} id={sales.sales_id} onDelete={handleDelSale} onSubmit={handleEditSale}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSales}
                                name = "salespersonId" 
                                placeholder="Corrector ID" 
                                initialValue={sales.salespersonId} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "totalSales"
                                placeholder="Total da Venda" 
                                initialValue={sales.totalSales} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSales} 
                                name = "commission"
                                placeholder="Total de Comissao" 
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
