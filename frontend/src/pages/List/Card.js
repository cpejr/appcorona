import React from 'react';

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
  const classes = useStyles();
  return (
    <OngCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="cachorro.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="btn btn--radius-2 btn btn-warning p-2 mx-auto" type="submit">Saiba mais</button>
      </CardActions>
    </OngCard>
  );
}
