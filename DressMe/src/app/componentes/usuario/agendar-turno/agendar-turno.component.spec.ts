import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarTurnoComponent } from './agendar-turno.component';

describe('AgendarTurnoComponent', () => {
  let component: AgendarTurnoComponent;
  let fixture: ComponentFixture<AgendarTurnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarTurnoComponent]
    });
    fixture = TestBed.createComponent(AgendarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
