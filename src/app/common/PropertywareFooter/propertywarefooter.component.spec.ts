import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertywarefooterComponent } from './propertywarefooter.component';

describe('PropertywarefooterComponent', () => {
  let component: PropertywarefooterComponent;
  let fixture: ComponentFixture<PropertywarefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertywarefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertywarefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
