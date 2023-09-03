import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCajaComponent } from './admin-caja.component';

describe('AdminCajaComponent', () => {
  let component: AdminCajaComponent;
  let fixture: ComponentFixture<AdminCajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCajaComponent]
    });
    fixture = TestBed.createComponent(AdminCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
