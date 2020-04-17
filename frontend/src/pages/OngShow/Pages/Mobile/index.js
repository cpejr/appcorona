import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { MdKeyboardBackspace, MdLocationOn, MdCall, MdExpandMore } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    backgroundColor: '#888',
    paddingTop: '56.25%',
  },
  header: {
    position: "relative",
    display: 'flex',
    flexDirection: 'row',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 'auto',
  },
  backIcon: {
    position: 'absolute',
    left: 13,
    alignSelf: 'center'
  },
  iconButton: {
    minHeight: 40,
    minWidth: 40,
    height: 40,
    width: 40,
    margin: 10,
  },
  facebookBorder: {
    borderColor: "#3b5998"
  },
  divButtons:{
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function Mobile(props) {
  const [ong, setOng] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <div className={classes.image}>
        Imagem
      </div>

      <div className={classes.header}>
        <IconContext.Provider value={{ color: "#444", size: "2em" }}>
          <MdKeyboardBackspace className={classes.backIcon} />
        </IconContext.Provider>
        <div className={classes.center}>
          <Typography variant="h4">Nome da ong</Typography>
          <Typography variant="caption ">cnpj: 1231233123</Typography>
        </div>
      </div>

      <div>
        <MdLocationOn />
        <Typography variant="caption">
          Estado, cidade, bairro
          <br />
          rua/avenida numero
        </Typography>
      </div>

      <div>
        <MdCall />
        <Typography variant="caption">
          (31) 38475918
          <br />
          (31) 947264731
        </Typography>
      </div>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Descrição</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <div className={classes.divButtons}>
        <Button variant="outlined" className={[classes.iconButton, classes.facebookBorder]}>
          <div>
            <IconContext.Provider value={{ color: "#3b5998", size: '1.4em' }}>
              <FaFacebookF />
            </IconContext.Provider>
          </div>
        </Button>
        <Button variant="outlined" className={[classes.iconButton, 'instagramBorder']}>
          <div className={classes.center}>
            <IconContext.Provider value={{ className: classes.center, size: '1.4em' }}>
              <i class="fa fa-instagram"></i>
            </IconContext.Provider>
          </div>
        </Button>
      </div>

    </div>
  )

}