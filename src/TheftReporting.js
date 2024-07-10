import React, { useState } from 'react';
import { reportTheft } from './ContractInteraction';

function TheftReporting() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [reportStatus, setReportStatus] = useState(null); 
  const [error, setError] = useState('');

  const handleReportTheft = async () => {
    try {
      // Call the reportTheft function from ContractInteraction
      await reportTheft(registrationNumber);

      // If the theft report is successful, update the status message
      setReportStatus('Theft reported successfully');
    } catch (error) {
      setError('Error reporting theft');
      console.error(error);
    }
  };

  return (
    <div className="theft-reporting">
      <h2>Theft Reporting</h2>
      <div>
      
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          placeholder="Registration Number"
        />
      </div>

      <button onClick={handleReportTheft}>Report Theft</button>

      {reportStatus && <p>{reportStatus}</p>}
    </div>
  );
}

export default TheftReporting;
