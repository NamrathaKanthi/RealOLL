import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplicantComponent } from './addapplicant.component';

describe('AddapplicantComponent', () => {
  let component: AddapplicantComponent;
  let fixture: ComponentFixture<AddapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
