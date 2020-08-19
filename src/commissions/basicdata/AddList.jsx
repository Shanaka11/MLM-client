import React from 'react'
import {BtnListHeader, Input, FileUpload} from '../../components'
import {UploadAdd} from '../modals'
import {ReactComponent as Adverts} from '../../Icons/online-ads.svg'
import { useState, useEffect } from 'react'
import {ApiCreateImage, ApiGetImages} from '../../lookups'

const AddList = () => {

    const [state, setState] = useState({
        new_img: false,
        doc: "",
        addList: [],
        username: "",
        password: ""
    })

    useEffect(() => {

        const handleFrontend = (response, status) => {
            if(status === 200){
                let tempList = response
                setState(prevValue => {
                    return {
                        ...prevValue,
                        addList: tempList
                    }
                })
            }else{
                alert("There was an unexpected error, Please try again")
            }
        }

        ApiGetImages(handleFrontend)

    }, [])
    
    const handleAddModal = () => {
        setState(prevValue => {
            return {
                ...prevValue,
                new_img: !prevValue["new_img"]
            }
        })
    }

    const handleAddSubmit = (event) => {
        const data = {
            doc: state.doc,
            username: state.username,
            password: state.password
       }

       const handleFrontend = (response, status) => {
            if(status === 201){
                let tempList = [response , ...state.addList]
                setState(prevValue => {
                    return {
                        ...prevValue,
                        new_img: !prevValue["new_img"],
                        addList: tempList
                    }
                })  
            }else{
                alert("There was an unexpected error, Please try again")
            }
       }
       
       ApiCreateImage(handleFrontend, data)  
    }

    const handleChangeImage = (event) => {
        setState(prevValue => {
            return {
                ...prevValue,
                doc: event.target.files ? event.target.files[0] : ""
            }
        })
    }

    const handleChange = (event) => {

        const {name, value} = event.target

        setState(prevValue => {
            return {
                ...prevValue,
                [name]: value 
            }
        })
    }

    return (
        <>
        <div className="container">            
            <div className="d-flex">
                <h1>Advertiesments</h1>
                <BtnListHeader onClickHandler={handleAddModal} name="newSale">
                    <Adverts className="list-header-icon"/>
                    <h4 className="ml-4">Add a Sale</h4>
                </BtnListHeader>
            </div>            
            <div className="list mb-4">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3 col-sm-2 col-main">
                            <h5>ID</h5>
                        </div>
                        <div className="col-9 col-sm-10 col-main">
                            <h5>Url</h5>
                        </div>                                               
                    </div>
                </div>
                {state.addList.map((item, index) => {
                    return (
                        <div className="list-item" key={index} data-item={JSON.stringify({item})}>
                            <div className="row">
                                <div className="col-3 col-sm-2 col-main">
                                    <p>{item.id}</p>
                                </div>
                                <div className="col-9 col-sm-10 col-main">
                                    <p>{item.doc}</p>
                                </div>                                                                            
                            </div>
                        </div>  
                    )
                })}
            </div>        
            {state.new_img && 
                <UploadAdd name="new_img" show={state.new_img} handleClose={handleAddModal} onSubmit={handleAddSubmit}>
                <div className="input-group">
                    <FileUpload name="image" setFinalValue={handleChangeImage} required/>
                    <div className="input-group">
                        <Input  type="text" 
                                setFinalValue={handleChange}
                                name = "username" 
                                placeholder="Numero de CPF" 
                                initialValue={state.username} 
                                reset="FALSE"
                                required/>
                    </div>
                    <div className="input-group">
                        <Input  type="password" 
                                setFinalValue={handleChange} 
                                name = "password"
                                placeholder="Senha" 
                                initialValue={state.password} 
                                reset="FALSE"
                                required/>
                    </div>
                </div>                    
                </UploadAdd>
            }
        </div>
        </>
    )
}



export default AddList
