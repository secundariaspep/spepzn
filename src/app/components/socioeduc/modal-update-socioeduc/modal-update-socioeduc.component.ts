import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ApiSocioeducativoService } from '../../../shared/services/socioeduc/api-socioeducativo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-update-socioeduc',
  templateUrl: './modal-update-socioeduc.component.html',
  styleUrls: ['./modal-update-socioeduc.component.css']
})
export class ModalUpdateSocioeducComponent implements OnInit {

  constructor(private dataApi: ApiSocioeducativoService) { }
  @ViewChild('btnClose',{static:true}) btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveUpdateSocioeduc(socioeducForm: NgForm): void {
    if (socioeducForm.value.id == null) {
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
