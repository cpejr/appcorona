import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Register(){

  const [ongsList, setOngs] = useState([]);

  useEffect(() => {
    async function getOngs() {
      try {
        let ongsResponse = await api.get('/ongs');

        setOngs(ongsResponse.data);

      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
  }, []);

    const ongs = ongsList.map(function(ong) {
      return (
        <Card key={ong._id} name={ong.name} description={ong.description} />
      );
    });

    return (
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w960">
          <div className="card card-5">
            <div className="wraper card-heading text-center d-flex flex-wrap justify-content-center">
              <img src="cachorro.jpg" className="logo" alt="Logo"></img>
              <h2 className="title align-self-center">Bem Conectado</h2>
              <Link className="Link btn btn--radius-2 btn btn-warning m-2 mr-4 justify-content-end align-self-center" to="/register" type="submit">
                Cadastrar ONG
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
