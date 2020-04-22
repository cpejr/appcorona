import React, { useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import './styles.css';

import Page1 from './Page1';
import QuemSomos from './QuemSomos';
import Page3 from './Page3';

export default function Home(props) {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = number => {
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  return (
    <React.Fragment>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Page1 />
        <QuemSomos />
        <Page3 />
        <Page1 />
      </ReactPageScroller>
    </React.Fragment>
  )
}