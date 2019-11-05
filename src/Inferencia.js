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
        modelo: "bloodCells",
        imagem: null,
        resultado: ""
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
    // const item = { nome: "testePost", descricao: "ttt", ativo: true };
    // let a = axios.get("/api/testes/");
    // axios.post("/api/testes/", item).then(res => this.printRes(res));

    let form_data = new FormData();
    form_data.append('imagem', this.state.activeItem.imagem, this.state.activeItem.imagem.name);
    form_data.append('modelo', this.state.activeItem.modelo);
    form_data.append('resultado', this.state.activeItem.resultado);

    axios.post("/api/analises/", form_data, {
      'content-type': 'multipart/form-data'
    }).then(res => this.printRes(res));
  };

  printRes(res){
    console.log(res);
  }

  handleChange(files){
    let oActiveItem = this.state.activeItem;
    oActiveItem.imagem = files[0];
    this.setState({
      activeItem: oActiveItem
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle">
              Células do Sangue - Análise
          </Typography>
          </Toolbar>
          <Grid container spacing={3} className={classes.form}>
            <Grid item xs={12} sm={12}>
              <Box className={classes.dropzone}>
                <DropzoneArea dropzoneText="Selecione a imagem para análise" showFileNames="true" filesLimit={1} onChange={this.handleChange.bind(this)}/>
              </Box>
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleAnalisar.bind(this)}>Analisar</Button>
          </div>
        </Paper>
      </React.Fragment>
    )
  };
};

Inferencia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inferencia);