import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img1 from './images/img1.png';
import {Link as LinkTo} from 'react-router-dom';
import blood_Cells from './images/blood_cells.jpg';

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
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
  }));

  export default function MeusDatasets() {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={blood_Cells}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Células do sangue
                </Typography>
              <Typography>
                Modelo para contagem de células do sangue. Linfócitos, Eosinófilos, Monócitos, Neutrófilos.
                </Typography>
            </CardContent>
            <CardActions>
            <LinkTo to="/dashboard/inferencia" style={{ textDecoration: 'none' }}>
              <Button size="small" color="primary">
                Análise
                </Button>
                <Button size="small" color="secondary">
                Treino
                </Button>
              </LinkTo>
            </CardActions>
          </Card>
        </Grid>
    );
  }