import React, { useState, useContext } from 'react'
import {ReactComponent as AddSales} from '../Icons/recurring_subscription.svg'
import {ReactComponent as Sales} from '../Icons/diary.svg'
import {ReactComponent as AddSalespersonI} from '../Icons/male_add.svg'
import {ReactComponent as Salespersons} from '../Icons/contract_agreement.svg'
import {ReactComponent as Agreement} from '../Icons/handshake.svg'
import {ReactComponent as Adverts} from '../Icons/online-ads.svg'
import {BtnCard} from '../components'

import {NewSales, NewSalesperson, UploadAgreement, UploadAdd} from '../commissions/modals'
import {Input, FileUpload} from '../components'

import {useHistory} from "react-router-dom"
import {SalesContext} from "../context"

import {ApiCreateDocument, ApiCreateImage} from '../lookups'

const AdminPanal = () => {

    const { addSales, addSalesperson } = useContext(SalesContext)

    const handleAddSale = () => {
        const data = {
            salesperson: sales.salespersonId,
            total: sales.totalSales,
            commission_perc: sales.commission,
            sales_id: sales.sales_id
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

    const handleAgreementSubmit = () => {
        
        const data = {
             doc: document.doc
        }
        const handleFrontend = (response, status) => {
            setNew('newAgreement')    
        }
        
        ApiCreateDocument(handleFrontend, data)
    }

    const handleAddSubmit = () => {
        const data = {
            doc: image.doc
       }
       const handleFrontend = (response, status) => {
           setNew('newAdd')    
       }
       
       ApiCreateImage(handleFrontend, data)        
    }

    let history = useHistory()

    const [modal, setModal] = useState({
        newSale: false,
        newSalespersons: false,
        newAgreement: false,
        newAdd: false
    })

    const [sales, setSales] = useState({
        salespersonId: "",
        totalSales: "",
        commission: "",
        sales_id: ""
    })

    const [document, setDocument] = useState({
        doc: ""
    })

    const [image, setImage] = useState({
        doc: ""
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

    const handleChangeDocument = (event) => {
        // const {name, value} = event.target

        setDocument(prevValue => {
            return {
                ...prevValue,
                doc: event.target.files[0]
            }
        })        
    }

    const handleChangeImage = (event) => {
        setImage(prevValue => {
            return {...prevValue,
            doc: event.target.files[0]
            }
        })
    }

    const resetSales = () => {
        setSales({
            salespersonId: "",
            totalSales: "",
            commission: "",
            sales_id: ""            
        })
    }

    const resetSalesperson = () => {
        setSalesperson({
            name: "",
            address: "",
            cell:"",
            sponser:"",
            realestateId:"",
            qualification: "",
            username: "",
            email: ""
        })
    }

    const redirect = (name) => {
        if(name === "SalesList"){
            history.push("/admin/sales")
        }else if(name === 'SalespersonList'){
            history.push("/admin/salesperson")
        }else if(name === 'newAdd'){
            history.push("/admin/adverts")
        }
    }

    return (
        <div className="container">
            {/* <h1 className="page-header">Admin Interface</h1> */}
            <div className="row margin-t-10">
                <div className="col-12 col-sm-6 col-md-3 mt-4 d-flex center">
                    <BtnCard name="newSale" onClickHandler={setNew}>
                        <AddSales className="icon"/>
                        <h4 className="btn-card-header">Adicionar Venda</h4>
                        <p className="btn-card-desc">Adicionar uma nova promoção</p>
                    </BtnCard>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-4 d-flex center">
                    <BtnCard name="SalesList" onClickHandler={redirect}>
                        <Sales className="icon"/>
                        <h4 className="btn-card-header">Ver Vendas</h4>
                        <p className="btn-card-desc">Mostra uma lista de todas as vendas</p>
                    </BtnCard>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-4 d-flex center">
                    <BtnCard name="newSalespersons" onClickHandler={setNew}>
                        <AddSalespersonI className="icon"/>
                        <h4 className="btn-card-header">Novo Vendedor</h4>
                        <p className="btn-card-desc">Add a new Salesperson</p>                        
                    </BtnCard>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-4 mb-4 d-flex center">
                    <BtnCard name="SalespersonList" onClickHandler={redirect}>
                        <Salespersons className="icon"/>
                        <h4 className="btn-card-header">View Salesperson List</h4>
                        <p className="btn-card-desc">Adicionar um novo vendedor</p>      
                    </BtnCard>
                </div>                                
            </div>
            <div className="row mb-4">
            <div className="col-12 col-sm-6 mt-4 d-flex center">
                    <BtnCard name="newAgreement" onClickHandler={setNew}>
                        <Agreement className="icon"/>
                        <h4 className="btn-card-header">Novo Acordo</h4>
                        <p className="btn-card-desc">Adicionar / Atualizar o contrato do usuário</p>
                    </BtnCard>
                </div>
                <div className="col-12 col-sm-6 mt-4 d-flex center">
                    <BtnCard name="newAdd" onClickHandler={redirect}>
                        <Adverts className="icon"/>
                        <h4 className="btn-card-header">Coloque anúncios</h4>
                        <p className="btn-card-desc">Lidar com anúncios</p>
                    </BtnCard>
                </div>
            </div>
            {/* Add Sales and Salesperson Dialogs */}
            {modal.newSale && 
                <NewSales name="newSale" show={modal.newSale} handleClose={setNew} onSubmit={handleAddSale} onReset={resetSales}>
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
                        <Input  type="text" 
                                setFinalValue={handleChangeSales} 
                                name = "sales_id"
                                placeholder="Factura" 
                                initialValue={sales.sales_id} 
                                reset="FALSE"
                                required/>
                    </div>                                                 
                </NewSales>
            }
            {modal.newSalespersons && 
                <NewSalesperson  name="newSalespersons" show={modal.newSalespersons} handleClose={setNew} onSubmit={handleAddSalesperson} onReset={resetSalesperson}>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson}
                                name = "name" 
                                placeholder="NomeCompleto" 
                                initialValue={salesperson.name} 
                                reset="FALSE"
                                required/>
                    </div>
                    {/* <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "address"
                                placeholder="Address" 
                                initialValue={salesperson.address} 
                                reset="FALSE"
                                required/>
                    </div> */}
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "cell"
                                placeholder="Numero de whatsapp" 
                                initialValue={salesperson.cell} 
                                reset="FALSE"
                                required/>
                    </div>           
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "sponser"
                                placeholder="Numero de CFP do recrutador" 
                                initialValue={salesperson.sponserId} 
                                reset="FALSE"/>
                    </div>  
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "realestateId"
                                placeholder="Numero de Corrector" 
                                initialValue={salesperson.realestateId} 
                                reset="FALSE"
                                required/>
                    </div>    
                    {/* <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "qualification"
                                placeholder="Qualification" 
                                initialValue={salesperson.qualification} 
                                reset="FALSE"/>
                    </div> */}
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "username"
                                placeholder="Numero de CPF" 
                                initialValue={salesperson.username} 
                                reset="FALSE"
                                required
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                patternText="must be in xxx.xxx.xxx-xx format"/>                                
                    </div>
                    <div className="input-group">
                        <Input  type="email" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "email"
                                placeholder="Email" 
                                initialValue={salesperson.email} 
                                reset="FALSE"
                                required/>
                    </div>                                                                                                               
                </NewSalesperson>
            }
{/* name="newSalespersons" show={modal.newSalespersons} handleClose={setNew} onSubmit={handleAddSalesperson} onReset={resetSalesperson} */}
            {modal.newAgreement &&
                <UploadAgreement name="newAgreement" show={modal.newAgreement} handleClose={setNew} onSubmit={handleAgreementSubmit}>
                    <div className="input-group">
                        <FileUpload name="doc" setFinalValue={handleChangeDocument} required/>
                    </div>  
                </UploadAgreement>
            }
            {modal.newAdd && 
                <UploadAdd name="newAdd" show={modal.newAdd} handleClose={setNew} onSubmit={handleAddSubmit}>
                    <div className="input-group">
                        <FileUpload name="image" setFinalValue={handleChangeImage} required/>
                    </div>                    
                </UploadAdd>
            }
        </div>
    )
}

export default AdminPanal
