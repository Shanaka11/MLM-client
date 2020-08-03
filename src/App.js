import React, { useContext, useEffect } from 'react';
import {Login} from './authentication'
import {Navbar} from './nav'


import {AdminPanal} from "./commissions"
import {SalesBasicData, SalesPersonBasicData} from "./commissions/basicdata"

import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'

import {AuthenticationContext} from "./context"

function App() {

  const {logged, role} = useContext(AuthenticationContext)
  const history = useHistory()

  useEffect(() => {
    if(!logged){
      history.push("/")
    }
    // If logged Restrict depending on the user role
  })

  return (
      <>
      {logged && <Navbar />}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin/" exact component={AdminPanal}/>
          <Route path="/admin/salesperson" exact component={SalesPersonBasicData}/>
          <Route path="/admin/sales" exact component={SalesBasicData}/>
        </Switch>
      </>
  );
}

export default App;
