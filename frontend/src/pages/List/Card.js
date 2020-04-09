import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import OngCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '10px',
    'margin-bottom': '15px',
    maxWidth: 320,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function Card(props) {
  let ong = props.ong;


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
      </CardActionArea>
      <CardActions>
        <Link className="btn btn--radius-2 btn btn-warning p-2 mx-auto" to={{
          pathname: '/ONG',
          state: {
            ong: ong
          }
        }}>Saiba mais</Link>
      </CardActions>
    </OngCard>
  )

}