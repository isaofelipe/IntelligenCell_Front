import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as LinkTo } from 'react-router-dom';

import img1 from '../images/imagens_album/BloodImage_00000.jpg';
import img2 from '../images/imagens_album/BloodImage_00001.jpg';
import img3 from '../images/imagens_album/BloodImage_00002.jpg';
import img4 from '../images/imagens_album/BloodImage_00003.jpg';
import img5 from '../images/imagens_album/BloodImage_00004.jpg';
import img6 from '../images/imagens_album/BloodImage_00005.jpg';
import img7 from '../images/imagens_album/BloodImage_00006.jpg';
import img8 from '../images/imagens_album/BloodImage_00007.jpg';
import img9 from '../images/imagens_album/BloodImage_00008.jpg';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: 1200
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const items = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
]

export default function ClassificacaoForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {items.map(items => (
            <Grid item key={items.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={items.img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Imagem {items.id}
                  </Typography>
                </CardContent>
                <CardActions>
                  <LinkTo to="/dashboard/boundingbox" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      Visualizar
                  </Button>
                  </LinkTo>
                  <LinkTo to="/dashboard/boundingbox" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      Editar
                  </Button>
                  </LinkTo>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}