import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClimaComponent } from './modal-clima.component';

describe('ModalClimaComponent', () => {
  let component: ModalClimaComponent;
  let fixture: ComponentFixture<ModalClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
