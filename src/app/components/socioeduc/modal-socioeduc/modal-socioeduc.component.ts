import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ApiSocioeducativoService } from '../../../shared/services/socioeduc/api-socioeducativo.service';
import { SocioeducativoInterface } from '../../../models/socioeduc/socioeducativo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-socioeduc',
  templateUrl: './modal-socioeduc.component.html',
  styleUrls: ['./modal-socioeduc.component.css']
})
export class ModalSocioeducComponent implements OnInit {

  constructor(private dataApi: ApiSocioeducativoService) { }
  @ViewChild('btnClose',{static:true}) btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveSocioeduc(socioeducForm: NgForm): void {
      console.log(socioeducForm.value);
    if (socioeducForm.value.seUid == null) {
      // New
      socioeducForm.value.userUid = this.userUid;
      this.dataApi.addSocioeduc(socioeducForm.value);
    } else {
      // Update
      this.dataApi.updateSocioeduc(socioeducForm.value);
    }
    socioeducForm.resetForm();
    this.btnClose.nativeElement.click();
  }


}
