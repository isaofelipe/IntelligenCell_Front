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
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 650,
  },
  form: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function createData(dataset, imagem, data) {
  return { dataset, imagem, data };
}

const rows = [
  createData('Apoptose', 'Imagem1.png', '25/09/2019'),
  createData('Apoptose', 'Imagem2.png', '24/09/2019'),
];

export default function Historico() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Histórico
          </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dataset</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.imagem}>
                <TableCell component="th" scope="row">
                  {row.dataset}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.imagem}
                </TableCell>
                <TableCell align="right">{row.data}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">Visualizar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
}