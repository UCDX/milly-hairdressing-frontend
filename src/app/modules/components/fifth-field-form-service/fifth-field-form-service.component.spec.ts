import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthFieldFormServiceComponent } from './fifth-field-form-service.component';

describe('FifthFieldFormServiceComponent', () => {
  let component: FifthFieldFormServiceComponent;
  let fixture: ComponentFixture<FifthFieldFormServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthFieldFormServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthFieldFormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
