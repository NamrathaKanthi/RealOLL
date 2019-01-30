import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsucessfulComponent } from './paymentsucessful.component';

describe('PaymentsucessfulComponent', () => {
  let component: PaymentsucessfulComponent;
  let fixture: ComponentFixture<PaymentsucessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsucessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
