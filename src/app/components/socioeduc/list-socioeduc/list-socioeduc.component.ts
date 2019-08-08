import { Component, OnInit } from '@angular/core';
import { ApiSocioeducativoService } from '../../../shared/services/socioeduc/api-socioeducativo.service';
import { AuthService } from '../../../shared/services/auth.service';
import { SocioeducativoInterface } from '../../../models/socioeduc/socioeducativo';

@Component({
  selector: 'app-list-socioeduc',
  templateUrl: './list-socioeduc.component.html',
  styleUrls: ['./list-socioeduc.component.css']
})
export class ListSocioeducComponent implements OnInit {

  constructor( private dataApi: ApiSocioeducativoService, private authService: AuthService) { }
  private socioeducs: SocioeducativoInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListSocioeducs();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  getListSocioeducs() {
    this.dataApi.getAllSocioeduc()
      .subscribe(socioeducs => {
        this.socioeducs = socioeducs;
      });
  }

  onDeleteSocioeduc(idSocioeduc: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteSocioeduc(idSocioeduc);
    }
  }

  onPreUpdateSocioeduc(socioeduc: SocioeducativoInterface) {
    console.log('SOCIOEDUC', socioeduc);
    this.dataApi.selectSocioeduc = Object.assign({}, socioeduc);
  }


}
