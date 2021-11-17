import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFieldFormServiceComponent } from './two-field-form-service.component';

describe('TwoFieldFormServiceComponent', () => {
  let component: TwoFieldFormServiceComponent;
  let fixture: ComponentFixture<TwoFieldFormServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFieldFormServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFieldFormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
