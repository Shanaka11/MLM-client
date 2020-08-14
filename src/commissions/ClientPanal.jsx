import React, { useContext, useEffect, useState } from 'react'
import {SalesContext, AuthenticationContext} from '../context'
const ClientPanal = () => {
    const {salesperson_id} = useContext(AuthenticationContext)
    const {connectedSalespersonList, getConnectedSalesperson, salesperson, getSalespersonDetail} = useContext(SalesContext)
    const [breadcrumbs, setBreadcrumbs] = useState([])
    // const {salesperson_id} = useContext(AuthenticationContext)
    // Intial salesperson list
    useEffect(() =>{
        if(salesperson_id){
            getSalespersonDetail(salesperson_id)
            // getConnectedSalesperson(salesperson_id)        
        }
    }, [salesperson_id])

    useEffect(() => {
        if(salesperson){
            let tempList = breadcrumbs
            const item = {
                id: salesperson.id,
                name: salesperson.name
            }
            tempList.push(item)
            setBreadcrumbs(tempList)
            getConnectedSalesperson(item.id) 
        }
    }, [salesperson])

    // HandleBreadcrumbs
    const handleRowOnClick = (event) => {
        // let tempList = breadcrumbs
        // tempList.push(currSalesperson)
        // setBreadcrumbs(tempList)
        // console.log(event.currentTarget.getAttribute("data-id"))
        // console.log(event.currentTarget.getAttribute("data-name"))
        let tempList = breadcrumbs
        const item = {
            id: event.currentTarget.getAttribute("data-id"),
            name: event.currentTarget.getAttribute("data-name")
        }
        tempList.push(item)
        setBreadcrumbs(tempList)
        getConnectedSalesperson(item.id)
    }

    const handleOnClickBreadCrumb = (event) => {
        let tempList = breadcrumbs
        const data = {
            id: event.currentTarget.getAttribute("data-id"),
            name: event.currentTarget.getAttribute("data-name")
        }
        let itemIndex = -1
        tempList.forEach((item, index) => {
            if(item.id === data.id){
                itemIndex = index
            }
        })
        
        if(itemIndex <= 0){
            tempList.splice(1) 
        }else{
            tempList.splice(itemIndex+1) 
        }
             
        setBreadcrumbs(tempList)
        getConnectedSalesperson(data.id)
    }

    return (
        <div className="container">
            {salesperson && <>
            <h1>{salesperson.id} - {salesperson.name} </h1>
            <div className="list">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3">
                            <div className="small">Sponser Name</div>
                            {salesperson.sponser ?
                                <div>{salesperson.sponser.name}</div>
                                :
                                <div>Not Sponsered</div>
                            }
                            <div className="small">Personal Commission</div>
                            <div>{salesperson.total_individual_commission}</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Qualification</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Total Individual Sales</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Total Group Sales</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div>{salesperson.sponser.name}</div>
                        </div>
                        <div className="col-3">
                            <div>{salesperson.qualification}</div>
                        </div>
                        <div className="col-3">
                            <div>{salesperson.total_individual_sales}</div>
                        </div>
                        <div className="col-3">
                            <div>{salesperson.total_group_sales}</div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="small">Personal Commission</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Group Commission</div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div>{salesperson.total_individual_commission}</div>
                        </div>
                        <div className="col-3">
                            <div>{salesperson.total_group_commissions}</div>
                        </div>                        
                    </div> 
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="list mb-4">
                        <div className="list-item d-flex">
                            {/* Add Breadcrumbs Here */}
                            {breadcrumbs.map((item, index) => {
                                return (
                                <div className="bredcrumb-item" key={index} onClick={handleOnClickBreadCrumb} data-id={item.id} data-name={item.name}>{item.name}</div>
                                )
                            })}                            
                        </div>
                        <div className="list-item">
                            <div className="row">
                                <div className="col-3">
                                    <h5>Id</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Name</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Qualification</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Commission</h5>
                                </div>
                            </div>                            
                        </div>
                        {connectedSalespersonList.map((item, index) =>{
                            return (
                                <div className="list-item" key={index} onClick={handleRowOnClick} data-id={item.id} data-name={item.name}>
                                    <div className="row">
                                        <div className="col-3">
                                            <p>{item.id}</p>
                                        </div>
                                        <div className="col-3">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="col-3">
                                            <p>{item.qualification}</p>
                                        </div>
                                        <div className="col-3">
                                            <p>{item.total_individual_commission}</p>
                                        </div>
                                    </div>
                                </div>      
                            )
                        })}
                    </div>                    
                </div>
            </div>
            </>}
        </div>
    )
}

export default ClientPanal