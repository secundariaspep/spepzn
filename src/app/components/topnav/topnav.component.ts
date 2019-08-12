import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    public title: string = 'SPEP Zona Norte';
  constructor() { }

  ngOnInit() {
  }

}
