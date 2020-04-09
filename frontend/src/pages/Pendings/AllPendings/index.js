import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../services/api';
import OngView from './OngView';


export default function AllPendings(props) {

  let token = props.token;

  if (!token && props && props.location && props.location.state)
    token = props.location.state.token;

  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    async function getOngs() {
      try {
        let ongsResponse = await api.get('admin',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

        setOngs(ongsResponse.data);

      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
  }, [token]);




  return (
    <div>
      <div className="allPendingsTitle">ONGs pendentes ({ongs.length})</div>
      <div className="gridCard">
        {ongs.map((ong, index) => {
          return (
            <OngView key={index} ong={ong} token={token}/>
          )
        })}
      </div>
      <div id="bttn">
        <button
          onClick={event => window.location.href = '/'}
          className="btn1 btn--radius btn--blue"
          type="submit">VOLTAR A PÁGINA INICIAL
        </button>
      </div>
    </div>
  );
}