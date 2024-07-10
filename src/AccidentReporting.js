import React, { useState } from 'react';
import { reportAccident } from './ContractInteraction';

function AccidentReporting() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReportAccident = async () => {
    try {
      // Call the reportAccident function from ContractInteraction
      await reportAccident(registrationNumber, timestamp, description);
      setMessage('Accident reported successfully');
      setError('');
    } catch (error) {
      setMessage('');
      setError('Failed to report accident');
      console.error(error); // Log the error for debugging
    }
  }

  return (
    <div className="accident-reporting">
      <h2>Report an Accident</h2>
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

      <button onClick={handleReportAccident}>Report Accident</button>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default AccidentReporting;
