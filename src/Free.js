import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as LinkTo } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import FormLabel from '@material-ui/core/FormLabel';
import img1 from './images/img1.png';
import logo from './images/logo.png';
import {Link as LinkInto, animationScroll as scroll} from 'react-scroll';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between'
  },
  root: {
    width: '75%',
    marginTop: theme.spacing(3)
  },
  table: {
    width: '75%'
  },
  form: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  dropzone: {
    width: '80%'
  },
  buttons: {
    // display: 'flex',
    // justifyContent: 'flex-end',
  },
  button: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  downloadButton: {
      justifyContent: 'center',
      alignItems: 'center'
   },
  img: {
    width: '60%'
  }
}));

function createData(imagem, data) {
  return { imagem, data };
}

const rows = [
  createData('Imagem1.png', '25/09/2019'),
  createData('Imagem2.png', '24/09/2019'),
];

const data = [
  {name: 'Apoptose', uv: 12},
  {name: 'Necrose', uv: 15},
  {name: 'Viva', uv: 5}
];

export default function Free() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <LinkTo to="/">
            <img src={logo} alt="logo" width="250em" align="center" />
          </LinkTo>
          <LinkTo to="/" style={{ textDecoration: 'none' }}><Button size="small">
            Home
          </Button></LinkTo>
          <Button size="small">Sobre</Button>
          <Button variant="outlined" size="small">Cadastre-se</Button>
          <LinkTo to="/dashboard/" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small">
            Entrar
          </Button></LinkTo>
        </Toolbar>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Análise Apoptose
          </Typography>
        </Toolbar>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={12} sm={12}>
            <Box className={classes.dropzone}>
              <DropzoneArea dropzoneText="Selecione a imagem para análise" showFileNames="true" filesLimit="1" />
            </Box>
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <LinkInto to="section2" smooth={true} offset={-70} duration={1000}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}>Analisar</Button>
          </LinkInto>
        </div>
      </Paper>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Resultados
          </Typography>
        </Toolbar>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={12} sm={12} id="section2">
            <img src={img1} className={classes.img} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Apoptose</TableCell>
                  <TableCell>Necrose</TableCell>
                  <TableCell>Viva</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">12</TableCell>
                  <TableCell component="th" scope="row">15</TableCell>
                  <TableCell component="th" scope="row">5</TableCell>
                  <TableCell component="th" scope="row">32</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Baixar Resultado
          </Typography>
        </Toolbar>
        <div className={classes.buttons}>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}>Baixar</Button>
        </div>
      </Paper>
    </React.Fragment>
  );
}