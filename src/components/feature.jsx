import React from 'react';
import "./feature.css";
import location from "../assets/loaction1.jpg"
import map from "../assets/map1.jpg"

const Feature = () => {
  return (
    <div className='outer-box'>
      <div className="intro">
        <div className='left-side'>
          <h1>Features <img src={location} alt="" /></h1>
          <p>These are the comprehensive features and functionalities of our innovative project, showcasing its capabilities and benefits.</p>
        </div>
        <div className="f-img">
          <img src={map} alt="map picture" loading='eager'/>
        </div>
      </div>
      <section className="timeline">
        <ul>
          <li>
            <div>
              <time>Real-time Location Tracking</time> Track the location of vehicles or assets in real-time, providing accurate and up-to-date information on their whereabouts.
            </div>
            <center><i className='bx bx-map'></i></center>
          </li>
          <li>
            <div>
              <time>Geofence Alerts</time>Set up virtual boundaries (geofences) on the map and receive alerts when vehicles enter or exit these boundaries, enabling proactive monitoring and management.
            </div>
            <center><i className='bx bx-map-pin' ></i></center>
          </li>
          <li>
            <div>
              <time>Theft Alert</time> Receive instant alerts in case of suspected theft or unauthorized use of vehicles, enabling quick response and recovery actions.
            </div>
            <center><i className='bx bxs-alarm-exclamation'></i></center>
          </li>
          <li>
            <div>
              <time>24 X 7 active</time> Receive alerts and live location 24 X 7 ,which means any day any time tracking. 
            </div>
            <center><i className='bx bxs-bell-plus'></i></center>
          </li>
          <li>
            <div>
              <time>Last location</time>If the device is not working or it is not connected to internet ,even then we can see the last location of the device
            </div>
            <center><i className='bx bxs-direction-right'></i></center>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Feature;
