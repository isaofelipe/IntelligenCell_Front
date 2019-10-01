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

function createData(imagem, data) {
  return { imagem, data };
}

const rows = [
  createData('Imagem1.png', '25/09/2019'),
  createData('Imagem2.png', '24/09/2019'),
];

export default function Inferencia() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Inferência
      </Typography>
        </Toolbar>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <input
          accept="image/*"
          className={classes.input}
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
        </Grid>
        </Grid>
        
      </Paper>

      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Histórico
      </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Imagem</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.imagem}>
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