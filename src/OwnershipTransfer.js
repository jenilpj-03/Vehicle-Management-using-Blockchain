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
    <div className="ownership-transfer">
      <h2>Transfer Ownership</h2>
      <div>
        <input type="text" placeholder="Registration Number"/>
      </div>
      <div>
      
        <input type="text"  placeholder="New Owner Address" />
      </div>
      <button >Transfer Ownership</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default InsuranceInformation;
