import { Component, OnInit } from '@angular/core';
import { TopnavService } from '../../shared/services/topnav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    public title = 'SPEP Zona Norte';
    public section = '';

  constructor(private topnavService: TopnavService) { }

  ngOnInit() {
    this.topnavService.section.subscribe(section => {
      this.section = section;
    });
  }

}
