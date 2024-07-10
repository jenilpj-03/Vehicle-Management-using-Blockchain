import React, { useState } from 'react';
import { updateInsuranceInfo } from './ContractInteraction';

function InsuranceInformation() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [expirationTimestamp, setExpirationTimestamp] = useState('');
  const [provider, setProvider] = useState('');
  const [message, setMessage] = useState(''); // For success or failure messages

  const handleAddInsuranceInfo = async () => {
    try {
      // Call the updateInsuranceInfo function from ContractInteraction
      await updateInsuranceInfo(registrationNumber, expirationTimestamp, provider);
      // Set a success message
      setMessage('Insurance information added successfully');
    } catch (error) {
      // Set a failure message
      setMessage('Failed to add insurance information');
    }
  }

  return (
    <div className="insurance-information">
      <h2>Add Insurance Information</h2>
      <div>
    
        <input   placeholder="Registration Number" type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
      </div>
      <div>
        <input placeholder="Expirations" type="text" value={expirationTimestamp} onChange={(e) => setExpirationTimestamp(e.target.value)} />
      </div>
      <div>
        <input placeholder="Provider" type="text" value={provider} onChange={(e) => setProvider(e.target.value)} />
      </div>
      <button onClick={handleAddInsuranceInfo}>Add Insurance Information</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default InsuranceInformation;
