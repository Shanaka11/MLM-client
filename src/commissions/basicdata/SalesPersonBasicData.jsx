import React, { useState } from 'react'
import {ReactComponent as Search} from '../../Icons/search.svg'
import {ReactComponent as AddSalesperson} from '../../Icons/male_add.svg'
import {BtnListHeader, Input} from '../../components'
import {NewSalesperson, EditSalesperson} from '../modals'

const SalesPersonBasicData = () => {
    const [modalState, setModalState] = useState({
        newSalesperson: false,
        editSaleperson: false
    })

    const [salesperson, setSalesperson] = useState({
        id: "",
        name: "",
        address: "",
        cell:"",
        sponserId:"",
        realestateId:""
    })

    const handleSalesModal = (name) => {    
        setModalState(prevValue => {
            return {
                ...prevValue,
                [name]: !prevValue[name]
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

    const handleItemOnClick = (event) => {
        // console.log(event.currentTarget.getAttribute("data-item"))
        let item = event.currentTarget.getAttribute("data-item") 
        item = JSON.parse(item)
        setSalesperson( prevValue => {
            return {
                ...prevValue,
                id: item.id,
                name: item.name,
                address: item.address,
                cell: item.cell,
                sponserId: item.centerId,
                realestateId: item.realestateId
            }
        })        
        handleSalesModal('editSaleperson')
    }    

    return (
        <div className="container">
            <div className="d-flex">
                <h1>Salesperson List</h1>
                <BtnListHeader onClickHandler={handleSalesModal} name="newSalesperson">
                    <AddSalesperson className="list-header-icon"/>
                    <h4 className="ml-4">Add a Salesperson</h4>
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
                        <div className="col-2">
                            <h5>ID</h5>
                        </div>
                        <div className="col-2">
                            <h5>Name</h5>
                        </div>
                        <div className="col-2">
                            <h5>Address</h5>
                        </div>
                        <div className="col-2">
                            <h5>Cell</h5>
                        </div>
                        <div className="col-2">
                            <h5>Sponser ID</h5>
                        </div>
                        <div className="col-2">
                            <h5>Realestate ID</h5>
                        </div>                                                
                    </div>
                </div>
                <div className="list-item" onClick={handleItemOnClick} data-item={JSON.stringify({id: "1", name:"Shanaka Abeysinghe", totalSales: "5632.00", commission: "5"})}>
                    <div className="row">
                        <div className="col-2">
                            <p>1</p>
                        </div>
                        <div className="col-2">
                            <p>Shanaka Bandara</p>
                        </div>
                        <div className="col-2">
                            <p>67/1/A Napana, Gunnepana</p>
                        </div>
                        <div className="col-2">
                            <p>+94714145998</p>
                        </div>
                        <div className="col-2">
                            <p>12</p>
                        </div>
                        <div className="col-2">
                            <p>21</p>
                        </div>                                                
                    </div>
                </div>               
            </div>
            {modalState.newSalesperson && 
                <NewSalesperson  name="newSalesperson" show={modalState.newSalesperson} handleClose={handleSalesModal}>
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
            {modalState.editSaleperson && 
                <EditSalesperson name="editSaleperson" show={modalState.editSaleperson} handleClose={handleSalesModal} id={salesperson.id}>
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
                </EditSalesperson>
            }            
        </div>
    )
}

export default SalesPersonBasicData