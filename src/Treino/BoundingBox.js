import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Box, FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import MaterialTable from 'material-table';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Cropee from '../Cropee';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
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
    width: '100%'
  },
  tabela_classes: {
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
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
  { name: 'Linfócito', uv: 12 },
  { name: 'Monócito', uv: 15 }
];

// const oCrop = {
//   unit: "%",
//   width: 30,
//   aspect: 16 / 9
// };

export default function BoundingBox() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    classe: ''
  });
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <React.Fragment>
      <Paper className={classes.root}>
      <Toolbar>
          <Typography variant="h6" id="tableTitle">
            Imagem 1
          </Typography>
        </Toolbar>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={6} sm={6}>
            <Box className={classes.tabela_classes}>
              <Cropee />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box className={classes.tabela_classes}>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="classe">Classe</InputLabel>
              <Select
                value={state.classe}
                onChange={handleChange('classe')}
                inputProps={{
                  name: 'Classe',
                  id: 'classe',
                }}>
                <MenuItem value={10}>Linfócito</MenuItem>
                <MenuItem value={20}>Monócito</MenuItem>
              </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}>Salvar</Button>
        </div>
      </Paper>
    </React.Fragment>
  );
};

function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Classe', field: 'classe' }
    ],
    data: [
      { classe: 'apoptose' },
      {
        classe: 'necrose'
      },
    ],
  });

  return (
    <MaterialTable
      title="Classes"
      options={{
        actionsColumnIndex: -1,
        filtering: false,
        search: false,
        paging: false,
        header: false
      }}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}