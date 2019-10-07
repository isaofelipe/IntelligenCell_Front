import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
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
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import FormLabel from '@material-ui/core/FormLabel';
import img1 from './images/img1.png';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const styles = theme => ({
  root: {
    width: '100%',
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
  img: {
    width: '60%'
  }
});

class Inferencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        nome: "",
        descricao: "",
        ativo: false
      },
      testeList: []
    };
    this.data = [
      { name: 'Apoptose', uv: 12 },
      { name: 'Necrose', uv: 15 },
      { name: 'Viva', uv: 5 }
    ];
  };

  handleAnalisar(){
    const item = { nome: "testePost", descricao: "ttt", ativo: true };
    let a = axios.get("/api/testes/");
    axios.post("/api/testes/", item).then(res => this.printRes(res));
  };

  printRes(res){
    console.log(res);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle">
              Apoptose - Análise
          </Typography>
          </Toolbar>
          <Grid container spacing={3} className={classes.form}>
            <Grid item xs={12} sm={12}>
              <Box className={classes.dropzone}>
                <DropzoneArea dropzoneText="Selecione a imagem para análise" showFileNames="true" filesLimit={1} />
              </Box>
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleAnalisar}>Analisar</Button>
          </div>
        </Paper>
        <Paper className={classes.root}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle">
              Resultados
          </Typography>
          </Toolbar>
          <Grid container spacing={3} className={classes.form}>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
              <BarChart width={600} height={300} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    )
  };
};

Inferencia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inferencia);