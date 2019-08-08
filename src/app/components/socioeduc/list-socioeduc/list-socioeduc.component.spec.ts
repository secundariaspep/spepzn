import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocioeducComponent } from './list-socioeduc.component';

describe('ListSocioeducComponent', () => {
  let component: ListSocioeducComponent;
  let fixture: ComponentFixture<ListSocioeducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSocioeducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSocioeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
