import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPerfilesComponent } from './admin-perfiles.component';

describe('AdminPerfilesComponent', () => {
  let component: AdminPerfilesComponent;
  let fixture: ComponentFixture<AdminPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPerfilesComponent]
    });
    fixture = TestBed.createComponent(AdminPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
