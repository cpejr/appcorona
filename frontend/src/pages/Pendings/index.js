import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import OngCard from './Pending/OngCard';
import AllPendings from './AllPendings'

export default function Pendings(props) {
  const [token, setToken] = useState(props.location.state.token);
  console.log(token);

  const [ongSelected, setOngSelected] = useState();

  const handleSelect = (ong) => {
    setOngSelected(ong);
  }

  const handleGoBack = () => {
    setOngSelected();
  }

  const handleApproved = async (ong) => {
    try {
      await api.put(`admin/${ong._id}`,
        { approved: true },
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      setOngSelected();
      alert('Aprovado com sucesso!');
    }
    catch (err) {
      console.warn(err);
      alert("Erro");
    }
  }

  const handleRejected = async (ong) => {
    try {
      await api.delete(`admin/${ong._id}`, {
        headers: { Authorization: `Bearer ${token}` }
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
      {ongSelected ? <OngCard ong={ongSelected} handleGoBack={handleGoBack} handleApproved={handleApproved} handleRejected={handleRejected}/> : (<AllPendings handleSelect={handleSelect} token={token}/>)}
    </div>
  );
}