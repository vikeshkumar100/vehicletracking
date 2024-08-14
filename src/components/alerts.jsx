import React, { useState, useEffect } from 'react';
import './alerts.css';

const Alerts = () => {
  const [alert, setAlert] = useState({
    time: '2024-08-14 10:00 AM',
    type: 'Warning',
    message: 'This is a test alert message.',
  });

  useEffect(() => {
    // You can add any additional logic here if needed
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="table-container">
      <h1>Alert History</h1>
      {alert && (
        <table className="table">
          <tbody className="tbody">
            <tr>
              <th>Time</th>
              <td>{alert.time}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{alert.type}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{alert.message}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Alerts;
