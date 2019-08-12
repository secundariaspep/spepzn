import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { ApiSocioeducativoService } from 'src/app/shared/services/socioeduc/api-socioeducativo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-socioeduc',
  templateUrl: './modal-socioeduc.component.html',
  styleUrls: ['./modal-socioeduc.component.css']
})
export class ModalSocioeducComponent implements OnInit {

  constructor(private dataApi: ApiSocioeducativoService) { }
  @ViewChild('btnClose',{static:false}) btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveSocioeduc(socioeducForm: NgForm): void {
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
