import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentsByDayComponent } from './list-appointments-by-day.component';

describe('ListApointmentsByDayComponent', () => {
  let component: ListAppointmentsByDayComponent;
  let fixture: ComponentFixture<ListAppointmentsByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentsByDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentsByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
