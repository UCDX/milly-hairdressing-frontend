import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFieldFormComponent } from './two-field-form.component';

describe('TwoFieldFormComponent', () => {
  let component: TwoFieldFormComponent;
  let fixture: ComponentFixture<TwoFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
