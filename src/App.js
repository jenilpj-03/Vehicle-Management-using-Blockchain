import React from 'react';
import './App.css';
import VehicleRegistration from './VehicleRegistration';
import TheftReporting from './TheftReporting';
import MaintenanceRecord from './MaintenanceRecord';
import AccidentReporting from './AccidentReporting';
import InsuranceInformation from './InsuranceInformation';
import OwnershipTransfer from './OwnershipTransfer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vehicle Registration and Management</h1>
      </header>
      <main>
        <VehicleRegistration />
        <TheftReporting />
        <MaintenanceRecord />
        <AccidentReporting />
        <InsuranceInformation />
        <OwnershipTransfer />
      </main>
    </div>
  );
}

export default App;
