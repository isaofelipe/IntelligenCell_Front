import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link as LinkTo } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={LinkTo} to="/dashboard/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Meus Datasets" />
    </ListItem>
    <ListItem button component={LinkTo} to="/dashboard/treino">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Novo Dataset" />
    </ListItem>
    <ListItem button component={LinkTo} to="/dashboard/datasetspublicos">
      <ListItemIcon>
        <StarsIcon />
      </ListItemIcon>
      <ListItemText primary="Datasets Públicos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={LinkTo} to="/dashboard/historico">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Histórico" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Opções" />
    </ListItem>
  </div>
);
