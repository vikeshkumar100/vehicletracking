import React, { useState, useEffect } from 'react';
import {database, onValue,ref } from '../firebaseConfig';
import './alerts.css';

const Alerts = () => {
    const [alert, setAlert] = useState(null);
  
    useEffect(() => {
      const dataRef = ref(database);
      const fetchData = () => {
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setAlert({
              time: data.time,
              type: data.type,
              message: data.message,
            });
          }
        });
      };
  
      fetchData();
  
      // Cleanup function
      return () => {
      };
    }, []); // Empty dependency array ensures the effect runs only once on component mount
  
    return (
      <div className="table-container">
        <h1>Alert history</h1>
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