import React from 'react'
import {BtnListHeader, Input, FileUpload} from '../../components'
import {UploadAdd} from '../modals'
import {ReactComponent as Adverts} from '../../Icons/online-ads.svg'
import { useState, useEffect } from 'react'
import {ApiCreateImage, ApiGetImages, ApiDelImage} from '../../lookups'

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
                doc: event.target.files ? event.target.files[0] : "",
                hover_id: -1
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

    const handleListItemMouseEnter = (event) => {
        let item = event.currentTarget.getAttribute("data-item")         
        item = JSON.parse(item)

        setState(prevValue => {
            return {
                ...prevValue,
                hover_id: item.item.id
            }
        })
    }

    const handleListItemMouseLeave = (event) => {
        setState(prevValue => {
            return {
                ...prevValue,
                hover_id: -1
            }
        })
    }

    const handleDeleteItem =(event) => {
        let id = event.target.getAttribute("data-id")
        id = JSON.parse(id)
        const handleFrontend = (response, status) => {
            if(status === 204){
                let tempList = state.addList.filter(add => add.id !== id)
                setState(prevValue => {
                    return {
                        ...prevValue,
                        addList: tempList
                    }
                })                 
            }else{
                alert(JSON.stringify(response))
            }
        }

        ApiDelImage(handleFrontend, id)
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
                        <div className="col-8 col-sm-9 col-main">
                            <h5>Url</h5>
                        </div>                                               
                    </div>
                </div>
                {state.addList.map((item, index) => {
                    return (
                        <div    className="list-item" 
                                key={index} 
                                data-item={JSON.stringify({item})}
                                onMouseEnter={handleListItemMouseEnter} 
                                onMouseLeave={handleListItemMouseLeave}>
                            <div className="row">
                                <div className="col-3 col-sm-2 col-main">
                                    <p>{item.id}</p>
                                </div>
                                <div className="col-8 col-sm-9 col-main">
                                    <p>{item.doc}</p>
                                </div>
                                {state.hover_id === item.id && 
                                    <div className="col-1 col-main text-right list-close" data-id={item.id} onClick={handleDeleteItem}>
                                        x
                                    </div>          
                                }                                                                  
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
