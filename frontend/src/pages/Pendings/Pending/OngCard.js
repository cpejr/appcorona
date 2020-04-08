import React from 'react';
import Container from './OngContainer'

export default function OngCard(props) {

  let ong = props.ong;

  return (
    <div className="ONGcard">
      <div id="bttn" style={{"margin-bottom": "20px"}}>
        <button
          onClick={() => props.handleGoBack()}
          className="btn1 btn--radius btn--blue"
          type="submit">
          VOLTAR
          </button>
      </div>
      <h1 className="pendingsTitle">ONG PENDENTE</h1>
      <Container ong={ong} />
      <div id="bttn">
        <button
          onClick={() => props.handleApproved(ong)}
          className="btn1 btn--green btn--radius m-rg-20"
          type="submit">
          APROVAR
          </button>
        <button
          onClick={() => props.handleRejected(ong)}
          className="btn1 btn--red btn--radius m-lt-20"
          type="submit">
          REJEITAR
        </button>
      </div>
    </div>
  )
}