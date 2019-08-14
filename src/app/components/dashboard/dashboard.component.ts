import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { TopnavService } from '../../shared/services/topnav.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public isLogged: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
      private topnavService: TopnavService
  ) { }

  ngOnInit() {
      this.topnavService.setSection('Dashboard');
      this.getCurrentUser();
   }

   getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

}
