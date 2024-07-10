import React, { useState } from 'react';
import { registerVehicle } from './ContractInteraction';


function VehicleRegistration() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [message, setMessage] = useState(''); 

  const handleRegister = async () => {
    try {
      // Call the registerVehicle function from ContractInteraction
      await registerVehicle(registrationNumber, make, model, manufactureYear);

      // If registration is successful, set a success message
      setMessage('Vehicle successfully registered.');
    } catch (error) {
      // If there's an error, set an error message
      setMessage('Failed to register the vehicle. Please try again.');
    }
  };

  return (
    <div className="vehicle-registration">
      <h2>Vehicle Registration</h2>
      <div>
      
        <input placeholder="Registration Number" type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
      </div>
      <div>
        
        <input placeholder="Make"  type="text" value={make} onChange={(e) => setMake(e.target.value)} />
      </div>
      <div>
        
        <input placeholder="Model" type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        
        <input placeholder="Manufacture Year" type="text" value={manufactureYear} onChange={(e) => setManufactureYear(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register Vehicle</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default VehicleRegistration;
