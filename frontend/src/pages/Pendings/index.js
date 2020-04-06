import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

const ongfake = {
    name: 'Vinícius Doador Lindao',
    cnpj: '1111111110202022',
    state: 'Minas Gerais',
    description: 'dgsagsfgfsg gsanoafjsibadsji basflmasfoaob asfjaosi jalfdkajf jdanalfa aonjao dgjoifaj fwniefiwenf niefwjiwe ijfweifwi sofjosifjdio jf adjof aid aj fa di dajifja oajif a jaidfj aaijfoiaj f baosfoasjijans fsovijasovis bfisobjsafo',
    city: 'Belo Horizonte',
    neighborhood: 'Timirim',
    street: 'José Rodrigues Menezes',
    cep: '35160-000',
    number: '15',
    complement: '102',
    ddd: '31',
    instagram: '@vcmmor4is',
    picpay: '@vcmmor4is',
    whatsapp: '31983507978',
    facebook: 'www.facebook.com/vadfaeijda',
    email: 'vcm1105@gmail.com',
    site: 'www.meusite.com.br',
    agencia: '4582',
    banco: 'Santander',

};

export default function Pendings() {

  const [ongs, setOngs] = useState([]);
  const [currentOng, setCurrentOng] = useState(0);

  async function getOngs() {
    try {
      let ongsResponse = await api.get('admin', {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODU5NTQyNDEsImV4cCI6MTU4NjA0MDY0MX0.H-h_B3NRxlTGZI-ht4eN9VSWDqkf1XZVgxbgUQOcDwM` }
      });
      console.log(ongsResponse.data);
      setOngs(ongsResponse.data);
    }
    catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    getOngs();
  }, [])

  function handleNext() {
    if (currentOng < ongs.length - 1) {
      setCurrentOng(currentOng + 1);
      return
    }
    else
      return
  }

  function handlePrev() {
    if (currentOng < 0) {
      setCurrentOng(currentOng - 1);
      return
    }
    else
      return
  }

  async function handleApprove(e) {
    e.preventDefault()
    try {
      await api.put(`admin/${ongs[currentOng]._id}`,
        { approved: true },
        {
          headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODU5NTQyNDEsImV4cCI6MTU4NjA0MDY0MX0.H-h_B3NRxlTGZI-ht4eN9VSWDqkf1XZVgxbgUQOcDwM` }
        });
    }
    catch (err) {
      alert("Erro");
    }
  }

  async function handleReject(e) {
    e.preventDefault()
    try {
      await api.delete(`admin/${ongs[currentOng]._id}`, {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODU5NTQyNDEsImV4cCI6MTU4NjA0MDY0MX0.H-h_B3NRxlTGZI-ht4eN9VSWDqkf1XZVgxbgUQOcDwM` }
      });
    } catch (err) {
      alert("Erro");
    }
  }
  if (ongs[currentOng])
    return (
      <div>
        <div className="ONGcard">
          <h1 className="pendingsTitle">ONG PENDENTE</h1>
          <div className="container">
            <img src="ong.png" alt="Foto da ONG" />
            <div className="forms-row">
              <div className="name">Nome da ONG/Projeto: </div>
              <div className="style-5">{ongs[currentOng].name}</div>
            </div>
            <div className="forms-row">
              <div className="info">Descrição da ONG:</div>
              <div className="style-5">{ongs[currentOng].description}</div>
            </div>
            <div className="forms-row grid">
              <div className="info m-rg-45">Cidade:
                <div className="style-5">{ongs[currentOng].city}</div>
              </div>
              <div className="info">Estado:
                <div className="style-5">{ongs[currentOng].state}</div>
              </div>
            </div>
            <div className="forms-row">
              <div className="info">Bairro:</div>
              <div className="style-5">{ongs[currentOng].neighborhood}</div>
            </div>
            <div className="forms-row">
              <div className="info">Rua/Avenida:</div>
              <div className="style-5">{ongs[currentOng].street}</div>
            </div>
            <div className="forms-row">
              <div className="info m-rg-45">Número:
                <div className="style-5">{ongs[currentOng].number}</div>
              </div>
              <div className="info m-rg-45">Complemento:
                <div className="style-5">{ongs[currentOng].complement}</div>
              </div>
              <div className="info m-rg-45">CEP:
                <div className="style-5">{ongs[currentOng].CEP}</div>
              </div>
              <div className="info">CNPJ:
                <div className="style-5">{ongs[currentOng].cnpj}</div>
              </div>
            </div>
            <div className="forms-row">
              <div className="info m-rg-45">PicPay:
               <div className="style-5">{ongs[currentOng].picpay}</div>
              </div>
              <div className="info">Facebook:
                <div className="style-5">{ongs[currentOng].facebook}</div>
              </div>
            </div>
            <div className="forms-row">
              <div className="info">Instagram:</div>
              <div className="style-5">{ongs[currentOng].instagram}</div>
            </div>
            <div className="forms-row">
              <div className="info">Email:</div>
              <div className="style-5">{ongs[currentOng].email}</div>
            </div>
            <div className="forms-row">
              <div className="info m-rg-45">DDD:
                <div className="style-5">{ongs[currentOng].ddd}</div>
              </div>
              <div className="info">Telefone:
                <div className="style-5">{ongs[currentOng].phoneNumber}</div>
              </div>
            </div>
            <div className="forms-row">
              <div className="info m-rg-45">Banco:
                <div className="style-5">{ongs[currentOng].bank}</div>
              </div>
              <div className="info">Agência:
                <div className="style-5">{ongs[currentOng].agency}</div>
              </div>
            </div>
            <div id="bttn">
              <button className="btn1 btn--green btn--radius m-rg-45" onClick={handleApprove}>APROVAR</button>
              <button className="btn1 btn--red btn--radius" onClick={handleReject}>REJEITAR</button>
            </div>
            <div id="bttn">
              <button 
                onClick={event => window.location.href='/list'}
                className="btn1 btn--radius btn--blue"
                type="submit">VOLTAR A PÁGINA INICIAL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (<></>)
}