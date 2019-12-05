import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Classe', field: 'classe' },
        { title: 'Sigla', field: 'sigla' },
      ],
      data: [
        { classe: 'Linfócito', sigla: 'linf' },
        { classe: 'Monócito', sigla: 'mono'  },
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
          header: true
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