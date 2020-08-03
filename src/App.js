import React, { useState } from 'react';
import {Login} from './authentication'
import {Navbar} from './nav'

// For Testing
import {AdminContainer} from './commissions'

import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
function App() {

  const [logged, setLogged] = useState(false)

  return (
    // <div className="App">
      <>
      {logged && <Navbar />}
       <Router>
         <Switch>
           <Route path="/" exact component={Login} />
           <Route path="/admin" exact component={AdminContainer}/>
        </Switch>
      </Router>
      {/* <SalesBasicData /> */}
      {/* <SalesPersonBasicData /> */}
      </>
    // </div>
  );
}

export default App;
