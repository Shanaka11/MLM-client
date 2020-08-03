import React, { useState } from 'react'
import {AdminPanal} from "./index"
import {SalesBasicData, SalesPersonBasicData} from "./basicdata"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const AdminContainer = () => {

    return (
        <Router>
            <Switch>
                <Route path="/admin/" exact component={AdminPanal}/>
                <Route path="/admin/salesperson" exact component={SalesPersonBasicData}/>
                <Route path="/admin/sales" exact component={SalesBasicData}/>
            </Switch>
        </Router>
    )
}

export default AdminContainer
