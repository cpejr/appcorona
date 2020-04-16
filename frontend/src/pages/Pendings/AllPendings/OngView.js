import React from 'react';
import { Link } from 'react-router-dom';

export default function OngView({ ong, handleSelect, token}) {

  return (
    <div className="ONGrid">
      <div className="ONGcard1">
        <div className="container">
          <img src={`http://localhost:3333/images/${ong.imageSrc}`} alt="Foto da ONG" />
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
            <Link className="btn2 btn--blue btn--radius" to={{
              pathname: '/adminONG',
              state: {
                ong: ong,
                token: token,
              }
            }}> Analisar aprovação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}