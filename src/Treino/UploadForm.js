import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DropzoneArea } from 'material-ui-dropzone';
import MaterialTableDemo from './MaterialTableDemo'

export default function UploadForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Arquivo dataset
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <DropzoneArea dropzoneText="Selecione o arquivo .zip do dataset" showFileNames="true" filesLimit="1" />
        </Grid>
        <Grid item xs={12} sm={12}>
        <MaterialTableDemo />
        </Grid>
      </Grid >
    </React.Fragment>
  );
};
