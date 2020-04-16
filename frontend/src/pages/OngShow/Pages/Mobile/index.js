import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";

const useStyles = makeStyles({
  root: {
    margin: '10px',
    'margin-bottom': '15px',
    maxWidth: 320,
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 140,
  },
});

export default function Mobile(props) {
  const [ong, setOng] = useState();


  return (
    <div>
      <div>
        Imagem
      </div>

      <div>
        back icon
        <div>
          Nome da ong
          cnpj
        </div>
      </div>
    </div>
  )

}