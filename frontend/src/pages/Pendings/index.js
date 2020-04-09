import React, { useState } from 'react';
import './styles.css';
import AllPendings from './AllPendings'

export default function Pendings(props) {

  let reference;
  if (props && props.location && props.location.state)
    reference = props.location.state.token

  const [token] = useState(reference);

  
  return (
    <div>
      {token && <AllPendings token={token} />}
    </div>
  );
}