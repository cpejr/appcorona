import React, { useEffect, useState } from 'react';
import Mobile from './Pages/Mobile'
import Desktop from './Pages/Desktop'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function OngShow(props) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [ong, setOng] = useState({});
  const [categs, setCategs] = useState([]);

  useEffect(() => {
    if (props.location.state && props.location.state.ong) setOng(props.location.state.ong);
  }, [props.location.state])

  useEffect(() => {
    if (props.location.state && props.location.state.categs) setCategs(props.location.state.categs);
  }, [props.location.state])

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const windowWidth = windowDimensions.width;

  if (windowWidth <= 850)
    return (
      <Mobile ong={ong} categs={categs} />
    );
  else
    return (
      <Desktop ong={ong} categs={categs} />
    );
}