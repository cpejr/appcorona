import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SelectState from '../../components/SelectStates';


export default function List(props) {

  const ONGSPERPAGE = 10;

  const [pageCount, setPageCount] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [ongsList, setOngs] = useState([]);
  const [stateFilter, setStateFilter] = useState();
  const [cityFilter, setCityFilter] = useState();
  const [nameFilter, setNameFilter] = useState();

  useEffect(() => {
    const getOngs = async () => {
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

       
        const totalCount = ongsResponse.headers['x-total-count'];
        console.log('qaaaaaaaa');
        console.log(totalCount);
        
        setTotalCount(totalCount);

        setOngs(ongsResponse.data);

      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
  }, [stateFilter, cityFilter, nameFilter]);



  useEffect(() => {

    const updateOngs = () => {
      let totalPages = Math.ceil(totalCount / ONGSPERPAGE);
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { //Reached the end of the page.
        console.log(totalCount);
        
        if (pageCount < totalPages) {
          let currentPage = pageCount + 1;

          async function addNewOngs() {
            try {
  
              let queryParams = [];
  
              if (stateFilter)
                queryParams.push(`state=${stateFilter}`);
  
              if (cityFilter)
                queryParams.push(`city=${cityFilter}`);
  
              if (nameFilter)
                queryParams.push(`name=${nameFilter}`);
  
              queryParams.push(`page=${currentPage}`);
  
              queryParams = queryParams.join(',');
  
  
              let ongsResponse = await api.get(`/ongs?${queryParams}`);

              let newOngs = [ ...ongsList, ...ongsResponse.data ];
  
              setPageCount(currentPage);
              setTotalCount(ongsResponse.headers['x-total-count']);
              setOngs(newOngs);
  
            } catch (err) {
              console.warn(err);
            }
          }
          addNewOngs();
        }
      }
    }

    window.addEventListener('scroll', updateOngs);
    
    return () => {
      window.removeEventListener('scroll', updateOngs);
    }
  
  }, [cityFilter, nameFilter, ongsList, pageCount, stateFilter, totalCount]);

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
              Cadastre sua ong {totalCount}
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
