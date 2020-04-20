import React, { useState } from 'react'
import '../styles.css'
import SelectState from '../../../components/SelectStates';
import { TextField } from '@material-ui/core';

export default function OngContainer({ ong, onChange }) {

  const [name, setName] = useState(ong.name);
  const [description, setDescription] = useState(ong.description);
  const [city, setCity] = useState(ong.city);
  const [state, setState] = useState(ong.state);
  const [street, setStreet] = useState(ong.street);
  const [neighborhood, setNeighborhood] = useState(ong.neighborhood);
  const [number, setNumber] = useState(ong.number);
  const [cep, setCep] = useState(ong.cep);
  const [complement, setComplement] = useState(ong.complement);
  const [cnpj, setCnpj] = useState(ong.cnpj);
  const [picpay, setPicpay] = useState(ong.picpay);
  const [facebook, setFacebook] = useState(ong.facebook);
  const [instagram, setInstragram] = useState(ong.instagram);
  const [email, setEmail] = useState(ong.email);
  const [ddd, setDDD] = useState(ong.ddd);
  const [phoneNumber, setPhoneNumber] = useState(ong.phoneNumber);
  const [bank, setBank] = useState(ong.bank);
  const [site, setSite] = useState(ong.site);
  const [branch, setBranch] = useState(ong.branch);
  const [bankAccount, setBankAccount] = useState(ong.bankAccount);

  if(onChange)
  {
    onChange(
      {
        ...ong,
        name,
        description,
        city,
        state,
        street,
        neighborhood,
        number,
        cep,
        complement,
        cnpj,
        picpay,
        facebook,
        instagram,
        email,
        ddd,
        phoneNumber,
        bank,
        site,
        branch,
        bankAccount
      }
    )
  }


  return (
    <div className="container">
      <img src={`http://localhost:3333/images/${ong.imageSrc}`} alt="Foto da ONG" />
      <div className="forms-row">
        <TextField variant="filled" label="Nome da ONG/Projeto" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className="forms-row">
        <TextField variant="filled" label="Descrição da ONG" onChange={(e) => setDescription(e.target.value)} value={description} multiline={true} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Cidade" onChange={(e) => setCity(e.target.value)} value={city} />
        <div className="info m-lt-20">Estado:
        <SelectState
            className="input--style-5 col-lg-12 selectStates"
            onChange={e => setState(e)}
            initialValue={state}
          />
        </div>
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Bairro" onChange={(e) => setNeighborhood(e.target.value)} value={neighborhood} />
        <TextField variant="filled" label="Rua/Avenida" onChange={(e) => setStreet(e.target.value)} value={street} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Número" onChange={(e) => setNumber(e.target.value)} value={number} />
        <TextField variant="filled" label="Complemento" onChange={(e) => setComplement(e.target.value)} value={complement} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Cep" onChange={(e) => setCep(e.target.value)} value={cep} />
        <TextField variant="filled" label="CNPJ" onChange={(e) => setCnpj(e.target.value)} value={cnpj} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Facebook" onChange={(e) => setFacebook(e.target.value)} value={facebook} />
        <TextField variant="filled" label="Instagram" onChange={(e) => setInstragram(e.target.value)} value={instagram} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="PicPay" onChange={(e) => setPicpay(e.target.value)} value={picpay} />
        <TextField variant="filled" label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <TextField variant="filled" label="Site" onChange={(e) => setSite(e.target.value)} value={site} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="DDD:" onChange={(e) => setDDD(e.target.value)} value={ddd} />
        <TextField variant="filled" label="Telefone:" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
      </div>
      <div className="forms-row grid">
        <TextField variant="filled" label="Bank:" onChange={(e) => setBank(e.target.value)} value={bank} />
        <TextField variant="filled" label="Agência:" onChange={(e) => setBranch(e.target.value)} value={branch} />
        <TextField variant="filled" label="Conta:" onChange={(e) => setBankAccount(e.target.value)} value={bankAccount} />
      </div>
    </div>
  )
}