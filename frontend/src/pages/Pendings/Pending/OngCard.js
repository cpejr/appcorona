import React, { useState } from 'react';
import Container from '../../../components/OngContainer'
import { Link, Redirect } from 'react-router-dom';
import Pendings from '..';
import api from '../../../services/api';

export default function OngCard(props) {

  const [finalized, setFinalized] = useState(false);

  let ong;
  let token;

  if (props && props.location && props.location.state) {
    ong = props.location.state.ong;
    token = props.location.state.token;
  }

  const handleApproved = async (ong) => {
    try {
      await api.put(`admin/${ong._id}`,
        { approved: true },
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      alert('Aprovado com sucesso!');
      setFinalized(true);
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
      alert('Deletado com sucesso!');
      setFinalized(true);
    } catch (err) {
      console.warn(err);
      alert("Erro");
    }
  }

  return (
    <div>
      {ong && !finalized ? (
        <div className="ONGcard">

          <div id="bttn" style={{ "margin-bottom": "20px" }}>
            <Link className="btn1 btn--radius btn--blue" to={{
              pathname: '/Pendings',
              state: {
                token: token
              }
            }}>
              VOLTAR
            </Link>
          </div>
          <h1 className="pendingsTitle">ONG PENDENTE</h1>
          <Container ong={ong} />
          <div id="bttn">
            <button
              onClick={() => handleApproved(ong)}
              className="btn1 btn--green btn--radius m-rg-20"
              type="submit">
              APROVAR
          </button>
            <button
              onClick={() => handleRejected(ong)}
              className="btn1 btn--red btn--radius m-lt-20"
              type="submit">
              REJEITAR
            </button>
          </div>
        </div>
      ) : (
          <Redirect to={{
            pathname: '/Pendings',
            state: {
              token: token
            }
          }} />
        )}
    </div>
  )
}