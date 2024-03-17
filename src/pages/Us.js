import React from 'react';
import Image from '../image/Addhiya.jpg';
import './Us.css'; // Import file CSS untuk styling

const Contact = () => (
  <div className="contact-container">
    <div className="image-container">
      <img src={Image} alt="Addhiya" width="100" height="auto" />
    </div>
    <div className="text-container">
      <h1>TEAM PROFILE</h1>
      <p>Ad Dhiya Fahma Bilnadzary Nugraha</p>
      <p>Arsil</p>
      <p>Naufal</p>
      <p>Citra</p>
    </div>
  </div>
);

export default Contact;
