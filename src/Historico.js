import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Checkbox, TableBody, Table, TableCell, TableHead, TableRow, Paper, Typography, Avatar } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  table: {
  },
  form: {
    marginBottom: theme.spacing(2)
  },
  imagem_lista:{
    height: "10em"
  },
});

class Historico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      analiseList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/analises/")
      .then(res => this.setState({ analiseList: res.data }))
      .catch(err => console.log(err));
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderItems = () => {
    const { classes } = this.props;
    console.log(this.state.analiseList)
    if (this.state.analiseList.length){
      return this.state.analiseList.map(item => (
        <TableRow key={item.id}>
          <TableCell component="th" scope="row">
            {item.id}
          </TableCell>
          <TableCell component="th" scope="row">
            {item.modelo}
          </TableCell>
          <TableCell align="right">
            <img src={item.imagem} className={classes.imagem_lista}/>
          </TableCell>
          <TableCell align="right">
            <img src={item.imagem_analisada} className={classes.imagem_lista}/>
          </TableCell>
          <TableCell align="right">
            <Checkbox
              checked={item.analisada}
              disabled="true"
              color="primary"
            />
          </TableCell>
          <TableCell align="right">
            <Button variant="contained" color="primary">Visualizar</Button>
          </TableCell>
        </TableRow>
      ));
    }else{
      return;
    }
    
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle">
              Análises
            </Typography>
          </Toolbar>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell align="right">Imagem</TableCell>
                <TableCell align="right">Imagem Analisada</TableCell>
                <TableCell align="right">Analisada</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderItems()}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    )
  }
}
Historico.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Historico);