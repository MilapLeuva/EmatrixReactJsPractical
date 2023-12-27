import React from 'react'
import Sidebar from './Sidebar';
import ClientDetails from './ClientDetails';
import "./Client.css";

const Client = () => {


  return (
    <div className="container">
      <Sidebar />
      <ClientDetails />
    </div>
  );
};

export default Client;