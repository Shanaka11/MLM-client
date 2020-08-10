import React, { useContext, useEffect, useState } from 'react'
import {SalesContext, AuthenticationContext} from '../context'
const ClientPanal = () => {
    const {salesperson_id} = useContext(AuthenticationContext)
    const {connectedSalespersonList, salesperson, getSalespersonDetail} = useContext(SalesContext)
    const [currSalesperson, setCurrSalesperson] = useState({
        id: salesperson.id ? salesperson.id : "",
        name: salesperson.name ? salesperson.name : ""
    })
    const [breadcrumbs, setBreadcrumbs] = useState()
    // const {salesperson_id} = useContext(AuthenticationContext)
    // Intial salesperson list
    useEffect(() =>{
        if(salesperson_id){
            getSalespersonDetail(salesperson_id)
            // getConnectedSalesperson(salesperson_id)
        }
    }, [salesperson_id])

    // HandleBreadcrumbs
    return (
        <div className="container">
            {salesperson && <>
            <h1>{salesperson.id} - {salesperson.name} </h1>
            <div className="list">
                <div className="list-item">
                    <div className="row">
                        <div className="col-3">
                            <div className="small">Sponser Name</div>
                            <div>{salesperson.sponser.name}</div>
                            <div className="small">Personal Commission</div>
                            <div>{salesperson.total_individual_commission}</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Qualification</div>
                            <div>{salesperson.qualification}</div>
                            <div className="small">Group Commission</div>
                            <div>{salesperson.total_group_commissions}</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Total Individual Sales</div>
                            <div>{salesperson.total_individual_sales}</div>
                        </div>
                        <div className="col-3">
                            <div className="small">Total Group Sales</div>
                            <div>{salesperson.total_group_sales}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="list mb-4">
                        <div className="list-item">
                            have a breadcrumb trail of salesperson here
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
                                <div className="list-item" key={index}>
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
                                            <p>{item.total_commission}</p>
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