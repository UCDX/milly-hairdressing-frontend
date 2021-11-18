import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStylistComponent } from './register-stylist.component';

describe('RegisterStylistComponent', () => {
  let component: RegisterStylistComponent;
  let fixture: ComponentFixture<RegisterStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
