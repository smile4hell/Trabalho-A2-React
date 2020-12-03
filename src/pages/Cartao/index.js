import React from 'react';
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
    maxWidth: '100%',
  },
  media: {
    height: 500,
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://avozdaindustria.com.br/sites/avozdaindustria.com/files/styles/article_featured_retina/public/uploads/2019/04/PCP-Motivos-para-apostar-em-Planejamento-e-Controle-de-Produ%C3%A7%C3%A3o.jpg?itok=h0ejT6u1"
          title="Alyas LTDA"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center" color='primary'>
            Bem vindo ao controle de qualidade da empresa Alyas LTDA.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
           Aqui você encontra os detalhes da produção dos seus pedidos.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button className="float-center" color='primary'>
          Compartilhar
        </Button>
        <Button size="small" color='secondary'>
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
        
  );
}
