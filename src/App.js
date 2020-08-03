import React from 'react';
import {Login} from './authentication'
import {Navbar} from './nav'

// For Testing
import {AdminPanal} from './commissions'
import {SalesBasicData, SalesPersonBasicData} from './commissions/basicdata'

function App() {
  return (
    // <div className="App">
      // <Login />
      // <SalesPersonBasicData />
      <>
      <Navbar />
      {/* <AdminPanal /> */}
      {/* <SalesBasicData /> */}
      <SalesPersonBasicData />
      </>
    // </div>
  );
}

export default App;
