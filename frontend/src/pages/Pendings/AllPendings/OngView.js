import React from 'react';

export default function OngView({ ong, handleSelect }) {

  return (
    <div className="ONGrid">
      <div className="ONGcard1">
        <div className="container">
          <img src="ong.png" alt="Foto da ONG" />
          <div className="forms-row">
            <div className="name">Nome da ONG/Projeto: </div>
            <div className="info style-5">{ong.name}</div>
          </div>
          <div className="forms-row">
            <div className="info">Descrição da ONG:</div>
            <div className="info style-5">{ong.description}</div>
          </div>
          <div className="forms-row grid">
            <div className="info m-rg-20">Cidade:
              <div className="style-5">{ong.city}</div>
            </div>
            <div className="info m-lt-20">Estado:
              <div className="style-5">{ong.state}</div>
            </div>
          </div>
          <div id="bttn">
            <button
              onClick={() => handleSelect(ong)}
              className="btn2 btn--blue btn--radius"
              type="submit">ANALISAR APROVAÇÃO</button>
          </div>
        </div>
      </div>
    </div>
  );
}