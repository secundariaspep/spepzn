import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSocioeducComponent } from './modal-socioeduc.component';

describe('ModalSocioeducComponent', () => {
  let component: ModalSocioeducComponent;
  let fixture: ComponentFixture<ModalSocioeducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSocioeducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSocioeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
