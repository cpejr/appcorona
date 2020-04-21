import React, { useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import './styles.sass';

import Page1 from './Page1';
import Page2 from './Page2';
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
        <Page2 />
        <Page3 />
        <Page1 />
      </ReactPageScroller>
    </React.Fragment>
  )
}