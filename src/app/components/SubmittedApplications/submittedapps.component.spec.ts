import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedappsComponent } from './submittedapps.component';

describe('SubmittedappsComponent', () => {
  let component: SubmittedappsComponent;
  let fixture: ComponentFixture<SubmittedappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
