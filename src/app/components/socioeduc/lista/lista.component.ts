import {Component, OnInit} from '@angular/core';
import {Column, CdtSettings, DataManager} from '../../../../lib/ng-crud-table';
import {ListaService} from './lista.service';
import {getColumnsSocio} from './columns';
import {SelectItem} from '../../../../lib/common';
import {DtMessages, DtMessagesEn} from '../../../../lib/dt-translate';

@Component({
  selector: 'lista-socio',
  template: `<app-crud-table [dataManager]="dataManager"></app-crud-table>`
})

export class ListaComponent implements OnInit {

  columns: Column[];
  dataManager: DataManager;

  settings: CdtSettings = new CdtSettings({
    crud: true,
    bodyHeight: 380,
    exportAction: true,
    globalFilter: true,
    columnToggleAction: true,
    clearAllFiltersAction: true,
  });

  messages: DtMessages = new DtMessagesEn({
    titleDetailView: 'Detalle del Socio',
    titleCreate: 'Crear nuevo caso del Socio'
  });

  constructor(private service: ListaService) {
    this.columns = getColumnsSocio();
    this.columns.forEach((x, i) => (i > 0) ? x.editable = true : x.editable = false);
    this.columns[4].filterValues = this.filterValuesFunc;
    this.dataManager = new DataManager(this.columns, this.settings, this.service, this.messages);
    this.dataManager.pager.perPage = 20;
  }

  ngOnInit() {}

  filterValuesFunc(columnName: string): Promise<SelectItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(
        [
          {id: '1', name: 'Circuito 1'},
          {id: '2', name: 'Circuito 2'},
          {id: '3', name: 'Circuito 3'},
          {id: '4', name: 'Circuito 4'},
          {id: '5', name: 'Circuito 5'},
        ]
      ), 1000);
    });
  }

}
