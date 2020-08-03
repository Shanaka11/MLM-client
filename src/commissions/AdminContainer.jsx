import React, { useContext, useEffect } from 'react'
import {AdminPanal} from "./index"
import {SalesBasicData, SalesPersonBasicData} from "./basicdata"
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {AuthenticationContext} from "../context"

const AdminContainer = () => {
    
    const {logged, role} = useContext(AuthenticationContext)
    const history = useHistory()

    useEffect(() => {
        if(!logged){
            history.push("/")        
        }
    })

    return ( 
            <>               
            {logged && 
            <Switch>
                <Route path="/admin/" exact component={AdminPanal}/>
                <Route path="/admin/salesperson" exact component={SalesPersonBasicData}/>
                <Route path="/admin/sales" exact component={SalesBasicData}/>
            </Switch>
            }
            </>
    )
}

export default AdminContainer
