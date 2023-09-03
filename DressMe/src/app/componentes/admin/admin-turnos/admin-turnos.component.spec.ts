import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTurnosComponent } from './admin-turnos.component';

describe('AdminTurnosComponent', () => {
  let component: AdminTurnosComponent;
  let fixture: ComponentFixture<AdminTurnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTurnosComponent]
    });
    fixture = TestBed.createComponent(AdminTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
