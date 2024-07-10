import React, { useState } from 'react';
import { addMaintenanceRecord } from './ContractInteraction';

function MaintenanceRecord() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState('');

  const handleAddMaintenanceRecord = async () => {
    try {
      await addMaintenanceRecord(registrationNumber, timestamp, description);
      setMessage('Maintenance record added successfully');
    } catch (error) {
      setError('Failed to add maintenance record');
      console.error(error);
    }
  }

  return (
    <div className="maintenance-record">
      <h2>Add Maintenance Record</h2>
      <div>
       
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          placeholder="Registration Number"
        />
      </div>
      <div>
        
        <input
          type="text"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp"
        />
      </div>
      <div>
        
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>

      <button onClick={handleAddMaintenanceRecord}>Add Maintenance Record</button>
      <p>{message}</p> {/* Display success or error message */}
    </div>
  );
}

export default MaintenanceRecord;
