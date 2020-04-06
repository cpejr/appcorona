import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../services/api';
import OngView from './OngView';

export default function AllPendings(props) {

  const [ongs, setOngs] = useState([]);

  async function getOngs() {
    try {
      let ongsResponse = await api.get('admin',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODYyMTM5OTgsImV4cCI6MTU4NjMwMDM5OH0.88DcWKITA3v2NHBAOnNBlXjjCFXwiXRb4-CY-YTjTYE`
          }
        });

      setOngs(ongsResponse.data);

    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    getOngs();
  }, []);

  return (
    <div>
      <div className="allPendingsTitle">ONGs pendentes ({ongs.length})</div>
      <div className="gridCard">
        {ongs.map((ong, index) => {
          return (
            <OngView key={index} ong={ong} handleSelect={props.handleSelect}/>
          )
        })}
      </div>
      <div id="bttn">
        <button
          onClick={event => window.location.href = '/list'}
          className="btn1 btn--radius btn--blue"
          type="submit">VOLTAR A PÁGINA INICIAL
        </button>
      </div>
    </div>
  );
}