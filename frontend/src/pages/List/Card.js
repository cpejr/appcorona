import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import OngCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import api from '../../services/api';

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

export default function Card(props) {
  let ong = props.ong;
  const [categs, setCategs] = useState([]);
  
  useEffect(() => {
    api.get(`categs/${ong._id}`).then((resultVector) =>{
      if(resultVector){
        setCategs(resultVector);
        console.log(categs);
      }
    });
  },[]);


  const classes = useStyles();

  return (
    <OngCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://localhost:3333/images/${ong.imageSrc}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ong.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ong.description}
          </Typography>
        </CardContent>
        <CardContent>
          <IconContext.Provider value={{ color: "#444", size: "1.2em" }}>
            <div className='locationContainer'>
            <MdLocationOn />
            <Typography variant="caption" component="h2" >
              {ong.state}, {ong.city}
            </Typography>
            </div>
          </IconContext.Provider>
        </CardContent>
      </CardActionArea>

      <CardActions className="mt-auto">
        <Link className="btn btn--radius-2 btn btn-warning p-2 mx-auto" to={{
          pathname: '/ongshow',
          state: {
            ong: ong
          }
        }}>Saiba mais</Link>
      </CardActions>
    </OngCard>
  )

}