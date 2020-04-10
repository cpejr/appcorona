import React from 'react'
import './styles.css'

export default function OngContainer({ ong }) {
  return (
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
            <div className="style-5">{ong.phoneNumber}</div>
        </div>
      </div>
      <div className="forms-row grid">
        <div className="info m-rg-20">Banco:
                <div className="style-5">{ong.bank}</div>
        </div>
        <div className="info m-lt-20">Agência:
            <div className="style-5">{ong.branch}</div>
        </div>
        <div className="info m-lt-20">Conta:
            <div className="style-5">{ong.bankAccount}</div>
        </div>
      </div>
    </div>
  )
}