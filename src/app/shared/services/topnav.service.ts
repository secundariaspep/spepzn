import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopnavService {
    public section = new BehaviorSubject ('Dashboard');

  constructor() { }

  setSection(section) {
    this.section.next(section);
  }
}
