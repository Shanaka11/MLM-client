import React, { useContext, useEffect } from 'react';
import {Login, Register, CreateAdmin, Settings} from './authentication'
import {Navbar} from './nav'


import {AdminPanal, ClientPanal} from "./commissions"
import {SalesBasicData, SalesPersonBasicData, AddList} from "./commissions/basicdata"

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
          <Route path="/admin/register/admin" exact component={CreateAdmin} />          
          <SalesProvider>
            <Route path="/user/register/settings" exact component={Settings} />
            <Route path="/admin/" exact component={AdminPanal}/>
            <Route path="/admin/salesperson" exact component={SalesPersonBasicData}/>
            <Route path="/admin/sales" exact component={SalesBasicData}/>
            <Route path="/admin/adverts" exact component={AddList}/>
            <Route path="/client/" exact component={ClientPanal} />                      
          </SalesProvider>
        </Switch>
      </>
  );
}

export default App;
