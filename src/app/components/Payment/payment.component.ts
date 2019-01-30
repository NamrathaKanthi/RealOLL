import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  formFields = [];
  public paymentInfo: FormGroup;

  constructor(private fb: FormBuilder, private progress: ProgressbarService) { }

  createFormControls() {
    this.paymentInfo = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      creditcardNumber: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      ccvcode: new FormControl(''),
      billingEmail: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      State: new FormControl(''),
      zip: new FormControl(''),
      birthdate: new FormControl('')
    });
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(100);
    this.createFormControls();
  }

}
