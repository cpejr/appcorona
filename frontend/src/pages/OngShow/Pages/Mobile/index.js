import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { MdKeyboardBackspace, MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, IconButton, Chip } from '@material-ui/core';
import './styles.css';
import picpayIcon from '../../../../images/picpay.png';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: 16,
  },
  image: {
    width: '100%',
    //backgroundColor: '#888',
    paddingTop: '56.25%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPositionX: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 'auto',
  },
  backIcon: {
    minHeight: 50,
    width: 50,
  },
  iconButton: {
    minHeight: 50,
    minWidth: 50,
    height: 50,
    width: 50,
    margin: 10,
  },
  facebookBorder: {
    borderColor: "#3b5998"
  },
  PicPayBorder: {
    borderColor: "#11C76F"
  },
  icon: {
    height: "2.3em !important",
    width: "2.3em !important",
    alignSelf: 'center',
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  divLinks: {
    marginBottom: 20,
    marginTop: 20,
  },
  linkContent: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 10,
    height: 38,
  },
  link: {
    flexWrap: "nowrap",
    overflow: 'hidden',
    textOverflow: 'ellipis',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
  },
  linkIcon: {
    backgroundColor: '#e9ecef',
    padding: 5,
    border: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRight: 1,
    borderRightColor: '#ced4da',
    borderStyle: 'solid',
  },
  textInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'top',
    marginTop: 15,
    marginBottom: 15,
  },
  textCnpj: {
    color: '#828282'
  },
  iconInfo: {
    margin: 2,
    marginRight: 5,
  },
  bankRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputBank: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  bankText: {
    backgroundColor: '#e9ecef',
    padding: 5,
    border: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRight: 1,
    borderRightColor: '#ced4da',
    borderStyle: 'solid',
    height: 38,
    width: 90,
    color: '#495057',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'end',
    justifyContent: 'flex-end',
  },
  bankGroup: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    flexGrow: 1
  },
});

export default function Mobile(props) {
  const history = useHistory();
  const [ong, setOng] = useState(props.ong ? props.ong : {});
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const [categs, setCategs] = useState([]);

  useEffect(() => {
    if (props.ong) setOng(props.ong);
  }, [props.ong])

  useEffect(() => {
    if (props.categs) setCategs(props.categs);
  }, [props.categs])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const getImage = () => {
    if (ong.imageSrc) {
      return `url(http://localhost:3333/images/${ong.imageSrc})`;
    }
  }

  return (
    <div className={classes.root}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


      <div alt='logoImage' className={classes.image} style={{ backgroundImage: getImage() }} />

      <div className={classes.content}>

        <div className={classes.header}>
          <IconButton aria-label="Voltar" className={classes.backIcon} onClick={() => history.goBack()}>
            <div className={classes.center}>
              <IconContext.Provider value={{ color: "#444", size: "1em" }}>
                <MdKeyboardBackspace />
              </IconContext.Provider>
            </div>
          </IconButton>
          <div className={classes.center}>
            <Typography variant="h4">{ong.name}</Typography>
            <Typography variant="body2" className={classes.textCnpj}>
              cnpj: {ong.cnpj}
            </Typography>
          </div>
        </div>

        <div>
          <div className={classes.textInfo}>
            <IconContext.Provider value={{ color: "#444", size: "1.5em", className: classes.iconInfo }}>
              <MdLocationOn />
            </IconContext.Provider>
            <Typography variant="body1">
              <a target="_blank" rel="noopener noreferrer" href={`http://maps.google.com/maps?q=${ong.street},${ong.number},${ong.city},${ong.state},${ong.cep}`}>
                {ong.state}, {ong.city}, {ong.neighborhood}
                <br />
                {ong.street} {ong.number}
                <br />
                {ong.cep}
              </a>
            </Typography>
          </div>
          <div className={classes.textInfo}>
            <IconContext.Provider value={{ color: "#444", size: "1.5em", className: classes.iconInfo }}>
              <MdCall />
            </IconContext.Provider>
            <Typography variant="body1">
              ({ong.ddd}) {ong.phoneNumber}
            </Typography>
          </div>

          <div style={{ display: 'flex', marginTop: 12, marginBottom: 12 }}>
            {
              categs && categs.map((name) => {
                return (
                  <Chip key={name} size="small" label={name} style={{marginRight: 5}} />
                )
              })
            }
          </div>
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
              {ong.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <div className={classes.divButtons}>
          {ong.facebook && (
            <Button variant="outlined" href={`https://${ong.facebook}`} className={`${classes.iconButton} ${classes.facebookBorder} instagramBorder`}>
              <div>
                <IconContext.Provider value={{ color: "#3b5998", size: '1.7em' }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </div>
            </Button>
          )}

          {ong.instagram && (
            <Button variant="outlined" href={`https://${ong.instagram}`} className={`${classes.iconButton} instagramBorder`}>
              <div className={classes.center}>
                <i className="fa fa-instagram" />
              </div>
            </Button>
          )}
        </div>

        <div className={classes.divLinks}>
          {ong.site && (
            <div className={classes.linkContent}>
              <div className={classes.linkIcon}>
                <IconContext.Provider value={{ color: "#495057", size: '1.1em' }}>
                  <FaLink />
                </IconContext.Provider>
              </div>
              <div className={classes.link}>
                <Typography>
                  <a href={ong.site}>{ong.site}</a>
                </Typography>
              </div>
            </div>
          )}
          {ong.email && (
            <div className={classes.linkContent}>
              <div className={classes.linkIcon}>
                <IconContext.Provider value={{ color: "#495057", size: '1.1em' }}>
                  <MdEmail />
                </IconContext.Provider>
              </div>
              <div className={classes.link}>
                <Typography>
                  {ong.email}
                </Typography>
              </div>
            </div>
          )}
        </div>

        <div>
          <div>
            <div className={classes.bankGroup}>
              <div className={classes.bankText}>Banco:</div>
              <div className={classes.inputBank}>{ong.bank}</div>
            </div>
            <div className={classes.bankGroup}>
              <div className={classes.bankText}>Agência:</div>
              <div className={classes.inputBank}>{ong.branch}</div>
            </div>
            <div className={classes.bankGroup}>
              <div className={classes.bankText}>Conta:</div>
              <div className={classes.inputBank}>{ong.bankAccount}</div>
            </div>
          </div>
          <div className={classes.divButtons}>
            {ong.picpay && (
              <Button variant="outlined" href={`https://${ong.picpay}`} className={`${classes.iconButton} ${classes.PicPayBorder}`}>
                <div>
                  <IconContext.Provider value={{ color: "#11C76F", size: '1.7em' }}>
                    <img src={picpayIcon} alt="logo" className={classes.icon} />
                  </IconContext.Provider>
                </div>
              </Button>
            )}
          </div>
        </div>

        <div className={classes.image} />

      </div>
    </div>
  )

}