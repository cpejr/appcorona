import React from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';

const ongsList = [
  {
  name: 'APAD',
  _id: 1,
  description: 'Primeiro item',
  cnpj: 156468168415,
  state: 'MG',
  city: 'Belo Horizonte',
  neighborhood: 'Santa Branca',
  street: 'Rua das Canárias',
  number: 160,
  complement: 'Apartamento 201',
  picpay: 418616161684615,
  facebook: 'facebook.com.br/lucaschaia',
  whatsapp: 31996513872,
  email: 'lucaschaia@hotmail.com',
  site: 'cpejr.com.br',
  agencia: 21616541,
  banco: 4516,
},
{
name: 'CPE',
_id: 2,
description: 'Segundo item',
cnpj: 1618687424684,
state: 'MG',
city: 'Belo Horizonte',
neighborhood: 'Campus Pampulha',
street: 'Av Presidente Antônio Carlos',
number: 6627,
complement: 'CPDEE',
picpay: 156461684,
facebook: 'facebook.com.br/cpe.jr',
whatsapp: 3134976258,
email: 'lucassouza@cpejr.com.br',
site: 'cpejr.com.br',
agencia: 11651,
banco: 1964,
},
{
name: 'PJ',
_id: 3,
description: 'Terceiro item',
cnpj: 1618687424684,
state: 'MG',
city: 'Belo Horizonte',
neighborhood: 'Campus Pampulha',
street: 'Av Presidente Antônio Carlos',
number: 6627,
complement: 'CPDEE',
picpay: 156461684,
facebook: 'facebook.com.br/cpe.jr',
whatsapp: 3134976258,
email: 'lucassouza@cpejr.com.br',
site: 'cpejr.com.br',
agencia: 11651,
banco: 1964,
},
{
name: 'Emas',
_id: 4,
description: 'Quarto item',
cnpj: 1618687424684,
state: 'MG',
city: 'Belo Horizonte',
neighborhood: 'Campus Pampulha',
street: 'Av Presidente Antônio Carlos',
number: 6627,
complement: 'CPDEE',
picpay: 156461684,
facebook: 'facebook.com.br/cpe.jr',
whatsapp: 3134976258,
email: 'lucassouza@cpejr.com.br',
site: 'cpejr.com.br',
agencia: 11651,
banco: 1964,
},
]

export default function Register(){

    const ongs = ongsList.map(function(ong) {
      return (
        <Card key={ong._id} name={ong.name} description={ong.description} />
      );
    });

    return (
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w960">
      <div className="card card-5">
      <div className="card-heading text-center d-flex flex-wrap justify-content-between">
        <img src="cachorro.jpg" className="logo" alt="Logo"></img>
        <h2 className="title align-self-center">Bem Conectado</h2>
        <Link className="btn btn--radius-2 btn btn-warning m-2 mr-4 justify-content-end align-self-center" to="/register" type="submit">Cadastrar ONG</Link>
      </div>

      <div className="card-body d-flex flex-wrap justify-content-center">
        {ongs}
      </div>
      </div>
      </div>
      </div>
    );
}
