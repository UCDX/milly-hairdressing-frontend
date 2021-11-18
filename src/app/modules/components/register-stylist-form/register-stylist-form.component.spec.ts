import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStylistFormComponent } from './register-stylist-form.component';

describe('RegisterStylistFormComponent', () => {
  let component: RegisterStylistFormComponent;
  let fixture: ComponentFixture<RegisterStylistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStylistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStylistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
