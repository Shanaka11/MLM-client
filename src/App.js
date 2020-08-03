import React from 'react';
import {Login} from './authentication'
import {Navbar} from './nav'

// For Testing
import SalesPersonBasicData from './commissions/basicdata/SalesPersonBasicData'
import {AdminPanal} from './commissions'
import {SalesBasicData} from './commissions/basicdata'

function App() {
  return (
    // <div className="App">
      // <Login />
      // <SalesPersonBasicData />
      <>
      <Navbar />
      {/* <AdminPanal /> */}
      <SalesBasicData />
      </>
    // </div>
  );
}

export default App;
