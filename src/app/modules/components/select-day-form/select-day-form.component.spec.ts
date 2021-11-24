import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDayFormComponent } from './select-day-form.component';

describe('SelectDayFormComponent', () => {
  let component: SelectDayFormComponent;
  let fixture: ComponentFixture<SelectDayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
