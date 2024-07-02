// src/components/Services/Services.js
import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faPencilAlt, faDesktop, faTint, faPrint, faBroom } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="services" id='services'>
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faChair} className="service-icon" />
          <h2>OFFICE FURNITURE</h2>
          <p className="pservice-card">Delivering, Installing, and Optimizing Your Office Space: Providing Desks, Chairs, Storage Solutions, and More for a Productive Workplace Environment</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faPencilAlt} className="service-icon" />
          <h2>STATIONARY</h2>
          <p className="pservice-card">Supply, Delivery, and Organization of Office Essentials: Paper, Pens, Organizers, Notebooks, and More, for a Streamlined Workspace.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faDesktop} className="service-icon" />
          <h2>IT & OFFICE AUTOMATION</h2>
          <p className="pservice-card">Providing and servicing Desktops, Laptops, Printers, UPS, ID card printers, Copiers, and a variety of multifunctional devices in different sizes and capacities</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faBroom} className="service-icon" />
          <h2>SANITARY</h2>
          <p className="pservice-card">Supply of Sanitary Solutions: Cleaning Products, Hygiene Supplies, and Waste Management Systems, Ensuring Clean and Safe Environments. From small to large Scale Enterprises.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faPrint} className="service-icon" />
          <h2>PRINTING</h2>
          <p className="pservice-card">Comprehensive Printing Services: Bulk Printing, Scanning, Copying, and More - Your One-Stop Solution for Quality Printouts and Document Management</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faTint} className="service-icon" />
          <h2>TONER CARTRIDGES AND INKS</h2>
          <p className="pservice-card">Supply of Toner Cartridges and Ink Solutions: Keeping Your Printers Running Smoothly for Crisp and Vibrant Documents</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
