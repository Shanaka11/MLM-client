import React, { useState } from 'react'
import {ReactComponent as AddSales} from '../Icons/recurring_subscription.svg'
import {ReactComponent as Sales} from '../Icons/diary.svg'
import {ReactComponent as AddSalesperson} from '../Icons/male_add.svg'
import {ReactComponent as Salespersons} from '../Icons/contract_agreement.svg'
import {BtnCard} from '../components'

const AdminPanal = () => {

    return (
        <div className="container">
            <h1>Admin Interface</h1>
            <div className="row margin-t-10">
                <div className="col-3 d-flex center">
                    <BtnCard>
                        <AddSales className="icon"/>
                        <h4 className="btn-card-header">Add Sales (F1)</h4>
                        <p className="btn-card-desc">Add a New Sale</p>
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard>
                        <Sales className="icon"/>
                        <h4 className="btn-card-header">View Sales (F2)</h4>
                        <p className="btn-card-desc">Show a list of all sales</p>
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard>
                        <AddSalesperson className="icon"/>
                        <h4 className="btn-card-header">Add Salesperson (F3)</h4>
                        <p className="btn-card-desc">Add a new Salesperson</p>                        
                    </BtnCard>
                </div>
                <div className="col-3 d-flex center">
                    <BtnCard>
                        <Salespersons className="icon"/>
                        <h4 className="btn-card-header">View Salesperson List (F2)</h4>
                        <p className="btn-card-desc">Show a list of all Salesperson</p>      
                    </BtnCard>
                </div>                                
            </div>
        </div>
    )
}

export default AdminPanal
