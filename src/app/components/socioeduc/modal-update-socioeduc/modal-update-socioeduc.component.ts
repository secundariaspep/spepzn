import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ApiSocioeducativoActualizacionesService } from '../../../shared/services/socioeduc/api-socioeducativoactualizaciones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-update-socioeduc',
  templateUrl: './modal-update-socioeduc.component.html',
  styleUrls: ['./modal-update-socioeduc.component.css']
})
export class ModalUpdateSocioeducComponent implements OnInit {

  constructor(public dataApi: ApiSocioeducativoActualizacionesService) { }
  @ViewChild('btnClose',{static:true}) btnClose: ElementRef;
  @Input() userUid: string;
  @Input() seUid: string;
  ngOnInit() {
  }

  onSaveUpdateSocioeduc(formUpdateSocioeduc: NgForm): void {
      console.log(formUpdateSocioeduc.value);
    if (formUpdateSocioeduc.value.id == null) {
      // New
      formUpdateSocioeduc.value.userUid = this.userUid;
      this.dataApi.addActualizacion(formUpdateSocioeduc.value);
    } else {
      // Update
      this.dataApi.updateActualizacion(formUpdateSocioeduc.value);
    }
    formUpdateSocioeduc.resetForm();
    this.btnClose.nativeElement.click();
  }

}
