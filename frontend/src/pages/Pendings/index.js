import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import OngCard from './Pending/OngCard';
import AllPendings from './AllPendings'

export default function Pendings(props) {
  const [ongSelected, setOngSelected] = useState();

  const handleSelect = (ong) => {
    setOngSelected(ong);
  }

  const handleGoBack = () => {
    setOngSelected();
  }

  async function handleApproved(ong) {
    try {
      await api.put(`admin/${ong._id}`,
        { approved: true },
        {
          headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODYyMTM5OTgsImV4cCI6MTU4NjMwMDM5OH0.88DcWKITA3v2NHBAOnNBlXjjCFXwiXRb4-CY-YTjTYE` }
        });
      setOngSelected();
      alert('Aprovado com sucesso!');
    }
    catch (err) {
      console.warn(err);
      alert("Erro");
    }
  }

  async function handleRejected(ong) {
    try {
      await api.delete(`admin/${ong._id}`, {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODYyMTM5OTgsImV4cCI6MTU4NjMwMDM5OH0.88DcWKITA3v2NHBAOnNBlXjjCFXwiXRb4-CY-YTjTYE` }
      });
      setOngSelected();
      alert('Deletado com sucesso!');
    } catch (err) {
      console.warn(err);
      alert("Erro");
    }
  }

  return (
    <div>
      {ongSelected ? <OngCard ong={ongSelected} handleGoBack={handleGoBack} handleApproved={handleApproved} handleRejected={handleRejected} /> : (<AllPendings handleSelect={handleSelect} />)}
    </div>
  );
}