import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function List(props) {

  console.log(props);

  const [ongsList, setOngs] = useState([]);

  useEffect(() => {
    async function getOngs() {
      try {
        let ongsResponse = await api.get('/ongs');

        setOngs((ongsResponse.data).reverse());

      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
  }, []);

  console.log(ongsList)
  const ongs = ongsList.map(function (ong) {
    return (
      <Card key={ong._id} name={ong.name} imageSrc={`http://localhost:3333/images/${ong.imageSrc}` } description={ong.description} />
    );
  });

  return (
    <div className="page-wrapper">
      <div className="wrapper wrapper--w960">
        <div className="card card-5">
          <div className="header text-center d-flex flex-wrap justify-content-between">
            <img src="logo cpe.png" className="logo" alt="Logo"></img>
            <h2 className="title d-flex align-items-center">Bem Conectado</h2>
            <Link className="btn1 btn--radius btn--blue m-2 mr-4 justify-content-end align-self-center" to="/register" type="submit">
              Cadastre sua ong
              </Link>
          </div>

          <div className="card-body d-flex flex-wrap justify-content-center">
            {ongs}
          </div>
        </div>
      </div>
    </div>
  );
}
