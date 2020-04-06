import React from 'react';
import api from '../../../services/api';

export default function OngCard(props) {

  let ong = props.ong;

  return (
    <div className="ONGcard">
      <h1 className="pendingsTitle">ONG PENDENTE</h1>
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
        <div className="forms-row grid">
          <div className="info m-rg-20">Bairro:
              <div className="style-5">{ong.neighborhood}</div>
          </div>
          <div className="info m-lt-20">Rua/Avenida:
              <div className="style-5">{ong.street}</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">Número:
              <div className="style-5">{ong.number}</div>
          </div>
          <div className="info m-lt-20">Complemento:
            <div className="style-5">{ong.complement}</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">CEP:
            <div className="style-5">{ong.cep}</div>
          </div>
          <div className="info m-lt-20">CNPJ:
              <div className="style-5">{ong.cnpj}</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">Facebook:
              <div className="style-5">{ong.facebook}</div>
          </div>
          <div className="info m-lt-20">Instagram:
              <div className="style-5">{ong.instagram}</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">PicPay:
              <div className="style-5">{ong.picpay}</div>
          </div>
          <div className="info m-lt-20">E-mail:
               <div className="style-5">{ong.email}</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">DDD:
            <div className="style-5">{ong.ddd}</div>
          </div>
          <div className="info m-lt-20">Telefone:
            <div className="style-5">Telefone</div>
          </div>
        </div>
        <div className="forms-row grid">
          <div className="info m-rg-20">Banco:
                <div className="style-5">Banco</div>
          </div>
          <div className="info m-lt-20">Agência:
            <div className="style-5">Agência</div></div>

        </div>
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
      <div id="bttn">
        <button
          onClick={() => props.handleGoBack()}
          className="btn1 btn--radius btn--blue"
          type="submit">
          VOLTAR A PÁGINA INICIAL
          </button>
      </div>
    </div>
  )
}