import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthFieldFormComponent } from './fifth-field-form.component';

describe('FifthFieldFormComponent', () => {
  let component: FifthFieldFormComponent;
  let fixture: ComponentFixture<FifthFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthFieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
