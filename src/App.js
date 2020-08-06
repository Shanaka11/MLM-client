import React, { useContext, useEffect } from 'react';
import {Login, Register} from './authentication'
import {Navbar} from './nav'


import {AdminPanal, ClientPanal} from "./commissions"
import {SalesBasicData, SalesPersonBasicData} from "./commissions/basicdata"

import { Switch, Route, useHistory} from 'react-router-dom'

import {AuthenticationContext} from "./context"
import {SalesProvider} from "./context"

function App() {

  const {logged, role, currentUser} = useContext(AuthenticationContext)
  const history = useHistory()

  useEffect(() => {    
    if(!logged){
      history.push("/")
    }else{
      // If logged Restrict depending on the user role
      if(role === ""){
        currentUser()
      }else{
        if(role === "ADMIN"){
          history.push("/admin/")
        }else if(role === "CLIENT"){
          history.push("/client/")
        }  
      }
    }    
  })

  return (
      <>
      {logged && <Navbar />}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <SalesProvider>
            <Route path="/admin/" exact component={AdminPanal}/>
            <Route path="/admin/salesperson" exact component={SalesPersonBasicData}/>
            <Route path="/admin/sales" exact component={SalesBasicData}/>
            <Route path="/client/" exact component={ClientPanal} />                      
          </SalesProvider>
        </Switch>
      </>
  );
}

export default App;
