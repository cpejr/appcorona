import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import OngCard from './Pending/OngCard';
import AllPendings from './AllPendings'

export default function Pendings(props) {
  const [ongSelected, setOngSelected] = useState();

  const handleSelect = (ong) =>{
    setOngSelected(ong);
  }

  const handleGoBack = () =>{
    setOngSelected();
  }

  return (
    <div>
      {ongSelected ? <OngCard ong={ongSelected} handleGoBack={handleGoBack} /> : (<AllPendings handleSelect={handleSelect} />)}
    </div>
  );
}