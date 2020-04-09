import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SelectState from '../../components/SelectStates';


export default function List(props) {

  console.log(props);

  const [ongsList, setOngs] = useState([]);
  const [stateFilter, setStateFilter] = useState();
  const [cityFilter, setCityFilter] = useState();
  const [nameFilter, setNameFilter] = useState();

  useEffect(() => {
    async function getOngs() {
      try {

        let queryParams = [];

        if (stateFilter)
          queryParams.push(`state=${stateFilter}`);

        if (cityFilter)
          queryParams.push(`city=${cityFilter}`);

        if (nameFilter)
          queryParams.push(`name=${nameFilter}`);

        queryParams = queryParams.join(',');


        let ongsResponse = await api.get(`/ongs?${queryParams}`);

        setOngs((ongsResponse.data).reverse());

      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
  }, [stateFilter, cityFilter, nameFilter]);

  const ongs = ongsList.map(function (ong) {
    return (
      <Card key={ong._id} ong={ong} imageSrc={`http://localhost:3333/images/${ong.imageSrc}`} description={ong.description} />
    );
  });


  function handleOnChangeState(state) {
    setStateFilter(state);
  }

  function handleOnChangeCity(city) {
    setCityFilter(city.target.value);
  }

  function handleOnChangeOng(ong) {
    setNameFilter(ong.target.value);
  }

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
          <div className="searchBar">
            Filtro por:  <SelectState onChange={handleOnChangeState} nullable={true} />
            Cidade: <input type='text' onChange={handleOnChangeCity}></input>
            Nome da ONG: <input type='text' onChange={handleOnChangeOng}></input>
          </div>

          <div className="card-body d-flex flex-wrap justify-content-center">
            {ongs}
          </div>
        </div>
      </div>
    </div>
  );
}
