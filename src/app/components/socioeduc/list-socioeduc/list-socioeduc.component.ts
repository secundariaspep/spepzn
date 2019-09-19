import { Component, OnInit } from '@angular/core';
import { ApiSocioeducativoService } from '../../../shared/services/socioeduc/api-socioeducativo.service';
import { AuthService } from '../../../shared/services/auth.service';
import { SocioeducativoInterface } from '../../../models/socioeduc/socioeducativo';
import { TopnavService } from '../../../shared/services/topnav.service';

@Component({
  selector: 'app-list-socioeduc',
  templateUrl: './list-socioeduc.component.html',
  styleUrls: ['./list-socioeduc.component.css']
})
export class ListSocioeducComponent implements OnInit {

  constructor(
      public dataApi: ApiSocioeducativoService,
      private authService: AuthService,
      private topnavService: TopnavService
    ) { }
  private socioeducs: SocioeducativoInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  public seUid: string = null;

  ngOnInit() {
      this.topnavService.setSection('Socio Educativo');
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
    const confirmacion = confirm('Está seguro que quiere eliminar el caso? Se borrarán todos los datos.');
    if (confirmacion) {
      this.dataApi.deleteSocioeduc(idSocioeduc);
    }
  }

  onPreEditSocioeduc(socioeduc: SocioeducativoInterface) {
    this.dataApi.selectSocioeduc = Object.assign({}, socioeduc);
  }

  onPreUpdateSocioeduc(socioeduc: SocioeducativoInterface) {
    this.dataApi.selectSocioeduc = Object.assign({}, socioeduc);
  }


}
