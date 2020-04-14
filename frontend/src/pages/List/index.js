import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SelectState from '../../components/SelectStates';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default function List(props) {

  const ONGSPERPAGE = 10;

  const [stateFilter, setStateFilter] = useState();
  const [cityFilter, setCityFilter] = useState();

  const [ongsData, setOngsData] = useState({
    pagesVector: [],
    ongs: [],
    currentPageIndex: 0,
  })

  useEffect(() => {
    const getOngs = async () => {
      try {
        console.log("banana")
        let queryParams = [];

        if (stateFilter)
          queryParams.push(`state=${stateFilter}`);

        if (cityFilter)
          queryParams.push(`city=${cityFilter}`);

        queryParams = queryParams.join(',')

        const totalCountResponse = await api.get(`/ongsCount?${queryParams}`);
        const totalCount = totalCountResponse.headers['x-total-count'];

        const pagesVector = [];
        const pages = Math.ceil(totalCount / ONGSPERPAGE);

        for (let i = 1; i <= pages; i++)
          pagesVector.push(i)

        shuffle(pagesVector);

        let pagesQuery;
        if (queryParams)
          pagesQuery = `,page=${pagesVector[0]}`;
        else
          pagesQuery = `page=${pagesVector[0]}`;

        let ongsResponse = await api.get(`/ongs?${queryParams}${pagesQuery}`);

        let newOngs = [...ongsResponse.data]

        let currentPageIndex = 0;

        if (newOngs.length < ONGSPERPAGE && pagesVector.length > 0) {
          currentPageIndex++

          let currentPage = pagesVector[currentPageIndex];

          let pagesQuery;
          if (queryParams)
            pagesQuery = `,page=${currentPage}`;
          else
            pagesQuery = `page=${currentPage}`;

          const ongsComplementResponse = await api.get(`/ongs?${queryParams}${pagesQuery}`);

          newOngs = [...newOngs, ...ongsComplementResponse.data]
        }


        let newOngsData = { ...ongsData };

        newOngsData.pagesVector = pagesVector;
        newOngsData.ongs = newOngs;
        newOngsData.currentPageIndex = currentPageIndex;

        setOngsData(newOngsData)
      } catch (err) {
        console.warn(err);
      }
    }
    getOngs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateFilter, cityFilter]);

  console.log('renderizou')

  useEffect(() => {
    const updateOngs = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { //Reached the end of the page.
        console.log('bb')
        const totalPages = ongsData.pagesVector.length;
        let currentPageIndex = ongsData.currentPageIndex;
        console.log(currentPageIndex);

        if (currentPageIndex < totalPages - 1) {
          currentPageIndex++;

          let currentPage = ongsData.pagesVector[currentPageIndex];

          async function addNewOngs() {
            try {

              let queryParams = [];

              if (stateFilter)
                queryParams.push(`state=${stateFilter}`);

              if (cityFilter)
                queryParams.push(`city=${cityFilter}`);

              queryParams = queryParams.join(',');

              let newOngs = [];

              let pagesQuery;
              if (queryParams)
                pagesQuery = `,page=${currentPage}`;
              else
                pagesQuery = `page=${currentPage}`;

              const ongsResponse = await api.get(`/ongs?${queryParams}${pagesQuery}`);


              newOngs = [...ongsResponse.data]

              if (newOngs.length < ONGSPERPAGE && ongsData.pagesVector.length > currentPageIndex) {
                currentPageIndex++

                currentPage = ongsData.pagesVector[currentPageIndex];

                let pagesQuery;
                if (queryParams)
                  pagesQuery = `,page=${currentPage}`;
                else
                  pagesQuery = `page=${currentPage}`;

                const ongsComplementResponse = await api.get(`/ongs?${queryParams}${pagesQuery}`);

                newOngs = [...newOngs, ...ongsComplementResponse.data]
              }

              const newOngsData = { ...ongsData }

              newOngsData.currentPageIndex = currentPageIndex;
              newOngsData.ongs = [...newOngsData.ongs, ...newOngs]

              setOngsData(newOngsData);

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

  }, [cityFilter, ongsData, stateFilter]);

  const ongs = ongsData.ongs.map(function (ong) {
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

  return (
    <div className="page-wrapper">
      <div className="wrapper wrapper--w960">
        <div className="card card-5">
          <div className="header text-center d-flex flex-wrap justify-content-between">
            <img src="logo cpe.png" className="logo" alt="Logo"></img>
            <h2 className="title d-flex align-items-center">Bem Conectado</h2>
            <Link className="btn1 btn--radius btn--blue m-2 mr-4 justify-content-end align-self-center" to="/register" type="submit">
              Cadastre sua ongs
              </Link>

          </div>
          <div className="searchBar d-flex flex-wrap">
            Selecione o estado:  <SelectState className="input--style-5 selectStates col-12 mb-2" onChange={handleOnChangeState} />
            Digite o nome da cidade: <input className="input--style-5" type='text' onChange={handleOnChangeCity}></input>
          </div>

          <div className="card-body d-flex flex-wrap justify-content-center">
            {ongs}
          </div>
        </div>
      </div>
    </div>
  );
}
