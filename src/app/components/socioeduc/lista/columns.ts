import {Column} from '../../../../lib/ng-crud-table';
import {Validators} from '../../../../lib/common';

export function getColumnsSocio(): Column[] {
  const columnsSocio: Column[] = [
    {
      title: 'Id',
      name: 'id',
      sortable: true,
      filter: true,
      frozen: true,
      width: 100,
      formHidden: true,
      type: 'number',
    },
    {
      title: 'Escuela',
      name: 'escuela',
      sortable: true,
      filter: true,
      frozen: true,
      width: 100,
      validatorFunc: Validators.get({required: true, minLength: 4}),
    },
    {
      title: 'Circuito',
      name: 'circuito',
      sortable: true,
      filter: true,
      type: 'select',
      options: [
        {id: '1', name: 'Circuito 1'},
        {id: '2', name: 'Circuito 2'},
        {id: '3', name: 'Circuito 3'},
        {id: '4', name: 'Circuito 4'},
        {id: '5', name: 'Circuito 5'},
      ],
      validatorFunc: Validators.get({required: true}),
    },
    {
      title: 'Año',
      name: 'año',
      sortable: true,
      filter: true,
      type: 'number',
      validatorFunc: Validators.get({required: true, maxLength: 4, pattern: '^[0-9]+$'}),
    },
    {
      title: 'Ticket',
      name: 'ticket',
      sortable: true,
      filter: true,
      type: 'number',
      validatorFunc: Validators.get({required: true, maxLength: 10, pattern: '^[0-9]+$'}),
    },
    {
      title: 'Ticket Fecha',
      name: 'ticket_fecha',
      sortable: true,
      filter: true,
      type: 'datetime-local',
    },
    {
      title: 'Alumno DNI',
      name: 'alumno_dni',
      sortable: false,
      filter: false,
      type: 'number',
      validatorFunc: Validators.get({required: true, maxLength: 8, pattern: '^[0-9]+$'}),
    },
    {
      title: 'Alumno',
      name: 'alumno',
      sortable: false,
      filter: false,
      validatorFunc: Validators.get({required: true, minLength: 2, pattern: '^[a-zA-Z ]+$'}),
    }
  ];
  return columnsSocio;
}

export function getColumnsActualizacion(): Column[] {
  const columnsActualizacion: Column[] = [
    {title: 'seUid', name: 'seUid', width: 100},
    {title: 'uid', name: 'uid', width: 100},
    {title: 'Fecha', name: 'fecha', width: 100},
    {title: 'Actualizacion', name: 'actualizacion', width: 100}
  ];
  return columnsActualizacion;
}

