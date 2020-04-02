import React from 'react';
import './styles.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Register(){
    const classes = useStyles();

    return (
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w790">
      <div class="card card-5">
      <div class="card-heading text-center">
        <h2 class="title">Bem Conectado</h2>
        <button class="btn btn--radius-2 btn btn-warning m-2" type="submit">Entrar</button>
        <button class="btn btn--radius-2 btn btn-warning m-2" type="submit">Cadastrar ONG</button>
      </div>

      <div class="card-body align-self-center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/List/cachorro.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              APAD
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Ong que serviu de exemplo na Semana Omnistack. Ajuda pessoas, fazendo o bem e tornando o Brasil um lugar melhor.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <button class="btn btn--radius-2 btn btn-warning p-2" type="submit">Saiba mais</button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/List/cachorro.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              APAD
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Ong que serviu de exemplo na Semana Omnistack. Ajuda pessoas, fazendo o bem e tornando o Brasil um lugar melhor.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <button class="btn btn--radius-2 btn btn-warning p-2" type="submit">Saiba mais</button>
          </CardActions>
        </Card>
      </div>
      </div>
      </div>
      </div>
    );
}
