import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedServiceService } from './../../services/shared-service.service';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {


  @Input() personalInfo: FormGroup;
  @Input() tabIndex: any;
  @Input() tabs: any;
  @Output() addApplication = new EventEmitter();
  @Output() deleteApplication = new EventEmitter();

  public formFields = [];

  constructor(public shared: SharedServiceService) {
  }

  addApplicantFn() {
    this.addApplication.emit('ADD CLICKED');
  }
  deleteApplicantFn() {
    this.deleteApplication.emit('delete clicked');
  }

  ngOnInit() {
    this.shared.personalInfoFormDetails.value.details[0].firstNameReq = this.shared.registerForm.value.firstName;
    this.shared.personalInfoFormDetails.value.details[0].lastNameReq = this.shared.registerForm.value.lastName;
    console.log(this.shared.personalInfoFormDetails.value.details[0].firstNameReq, this.shared.personalInfoFormDetails.value.details[0].lastNameReq);
  }

}
