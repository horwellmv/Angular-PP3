import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContabilidadComponent } from './admin-contabilidad.component';

describe('AdminContabilidadComponent', () => {
  let component: AdminContabilidadComponent;
  let fixture: ComponentFixture<AdminContabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContabilidadComponent]
    });
    fixture = TestBed.createComponent(AdminContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
