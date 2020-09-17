import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClimaComponent } from './ver-clima.component';

describe('VerClimaComponent', () => {
  let component: VerClimaComponent;
  let fixture: ComponentFixture<VerClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
