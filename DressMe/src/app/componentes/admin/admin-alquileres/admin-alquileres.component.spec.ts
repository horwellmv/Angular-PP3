import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlquileresComponent } from './admin-alquileres.component';

describe('AdminAlquileresComponent', () => {
  let component: AdminAlquileresComponent;
  let fixture: ComponentFixture<AdminAlquileresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAlquileresComponent]
    });
    fixture = TestBed.createComponent(AdminAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
