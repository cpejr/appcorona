import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import OngCard from './Pending/OngCard';
import AllPendings from './AllPendings'

export default function Pendings(props) {

  let reference;
  if (props && props.location && props.location.state)
    reference = props.location.state.token

  const [token, setToken] = useState(reference);

  
  return (
    <div>
      {token && <AllPendings token={token} />}
    </div>
  );
}