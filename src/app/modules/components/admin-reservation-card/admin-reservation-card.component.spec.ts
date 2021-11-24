import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservationCardComponent } from './admin-reservation-card.component';

describe('AdminReservationCardComponent', () => {
  let component: AdminReservationCardComponent;
  let fixture: ComponentFixture<AdminReservationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReservationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
