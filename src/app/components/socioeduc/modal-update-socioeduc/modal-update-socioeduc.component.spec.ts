import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateSocioeducComponent } from './modal-update-socioeduc.component';

describe('ModalUpdateSocioeducComponent', () => {
  let component: ModalUpdateSocioeducComponent;
  let fixture: ComponentFixture<ModalUpdateSocioeducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateSocioeducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateSocioeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
