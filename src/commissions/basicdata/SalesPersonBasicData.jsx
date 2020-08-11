import React, { useState, useContext , useEffect} from 'react'
import {ReactComponent as Search} from '../../Icons/search.svg'
import {ReactComponent as AddSalesperson} from '../../Icons/male_add.svg'
import {BtnListHeader, Input} from '../../components'
import {NewSalesperson, EditSalesperson} from '../modals'
import {SalesContext} from "../../context"

const SalesPersonBasicData = () => {

    const { salespersonList, 
            getSalesperson, 
            addSalesperson, 
            removeSalesperson, 
            updateSalesperson, 
            searchSalesperson
        } = useContext(SalesContext)
    const [ search, setSearch ] = useState("")
    // Get Sales    
    useEffect(()=>{
        getSalesperson()
    }, [])

    // Add Sales
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
    // Update Sales
    const handleEditSalesperson = () => {
        const data = {
            id: salesperson.id,
            name: salesperson.name,
            address: salesperson.address,
            cell: salesperson.cell,
            sponser: salesperson.centerId,
            realestate_id: salesperson.realestateId,
            qualification: salesperson.qualification           
        }
        updateSalesperson(data)
    }
    // Remove Sales
    const handleDelSalesperson = () => {
        const data = {
            id: salesperson.id            
        }         
        removeSalesperson(data)
    }

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
        realestateId:"",
        qualification: "",
        username: "",
        email: ""        
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
                id: item.item.id,
                name: item.item.name,
                address: item.item.address,
                cell: item.item.cell,
                sponserId: item.sponser,
                realestateId: item.realestate_id,
                qualification: item.qualification
            }
        })        
        handleSalesModal('editSaleperson')
    }    

    const handleSearch = (event) => {
        event.preventDefault()
        if(search === ""){
            getSalesperson()
        }else{
            searchSalesperson(search)
        }        
    }

    const handleOnChange = (event) => {
        setSearch(event.target.value)
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
            <form className="list-search" onSubmit={handleSearch}>
                <input  className="input-control list-search-input" 
                        type="text"
                        onChange={handleOnChange}
                        value={search}/>
                <button className="list-btn" type="submit"><Search className="list-icon"/></button>
            </form>
            {/* List */}
            <div className="list mb-4">
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
                        <div className="col-1">
                            <h5>Realestate ID</h5>
                        </div>
                        <div className="col-1">
                            <h5>Qual</h5>
                        </div>                                                
                    </div>
                </div>
                {salespersonList.map((item, index) => {
                    return (
                        <div className="list-item" key={index} onClick={handleItemOnClick} data-item={JSON.stringify({item})}>
                            <div className="row">
                                <div className="col-2">
                                    <p>{item.id}</p>
                                </div>
                                <div className="col-2">
                                    <p>{item.name}</p>
                                </div>
                                <div className="col-2">
                                    <p>{item.address}</p>
                                </div>
                                <div className="col-2">
                                    <p>{item.cell}</p>
                                </div>
                                <div className="col-2">
                                    <p>{item.sponser}</p>
                                </div>
                                <div className="col-1">
                                    <p>{item.realestate_id}</p>
                                </div>
                                <div className="col-1">
                                    <p>{item.qualification}</p>
                                </div>                                                                                
                            </div>
                        </div>  
                    )
                })}             
            </div>
            {modalState.newSalesperson && 
                <NewSalesperson  name="newSalesperson" show={modalState.newSalesperson} handleClose={handleSalesModal} onSubmit={handleAddSalesperson}>
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
                                name = "sponserId"
                                placeholder="Sopnser ID" 
                                initialValue={salesperson.sponserId} 
                                reset="FALSE"
                                required/>
                    </div>  
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "realestateId"
                                placeholder="Real Estate ID" 
                                initialValue={salesperson.realestateId} 
                                reset="FALSE"
                                required/>
                    </div>  
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "qualification"
                                placeholder="Qualification" 
                                initialValue={salesperson.qualification} 
                                reset="FALSE"
                                required/>
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
            {modalState.editSaleperson && 
                <EditSalesperson name="editSaleperson" show={modalState.editSaleperson} handleClose={handleSalesModal} id={salesperson.id} onDelete={handleDelSalesperson} onSubmit={handleEditSalesperson}>
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
                                name = "sponserId"
                                placeholder="Sopnser ID" 
                                initialValue={salesperson.sponserId} 
                                reset="FALSE"
                                required/>
                    </div>  
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "realestateId"
                                placeholder="Real Estate ID" 
                                initialValue={salesperson.realestateId} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="number" 
                                setFinalValue={handleChangeSalesperson} 
                                name = "qualification"
                                placeholder="Qualification" 
                                initialValue={salesperson.qualification} 
                                reset="FALSE"
                                required/>
                    </div>                                                 
                </EditSalesperson>
            }            
        </div>
    )
}

export default SalesPersonBasicData