import React, { useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import './styles.css';

import Main from './Main';
import QuemSomos from './QuemSomos';
import Page3 from './Page3';

export default function Home(props) {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = number => {
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  return (
    <React.Fragment>
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
        <Main handlePageChange={handlePageChange} saibaMais={true}/>
        <Page3 />
        <QuemSomos />
        <Main saibaMais={false}/>
      </ReactPageScroller >
    </React.Fragment>
  )
}