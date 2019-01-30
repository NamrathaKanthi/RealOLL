import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-addemployer',
  templateUrl: './addemployer.component.html',
  styleUrls: ['./addemployer.component.scss']
})
export class AddemployerComponent implements OnInit {

  public formFields = [];
  public tabs = [];
  public tabsCount = 0;
  public title: string;
  public keyName: string;

  @ViewChild(NgbTabset) tabset: NgbTabset;


  constructor(private fb: FormBuilder, private progress: ProgressbarService) {
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });
  }

  createTableFormsControls() {
    this.title = 'Add Employer';
    this.keyName = 'employer';
    this.formFields = [
      {
        name: 'Currently Employed',
        formControl: 'currentlyEmployed',
        type: 'select',
        data: [{
          id: '0',
          name: '1',
          value: '1'
        },
        {
          id: '1',
          name: '2',
          value: '2'
        }]
      },
      {
        name: 'Employer Name',
        formControl: 'employerName',
        type: 'text'
      },
      {
        name: 'Occupation',
        formControl: 'occupation',
        type: 'text'
      },
      {
        name: 'Contact Name for Verification',
        formControl: 'contactName',
        type: 'text'
      },
      {
        name: 'Phone Number',
        formControl: 'phoneNumber',
        type: 'text'
      },
      {
        name: 'Monthly Gross Income',
        formControl: 'monthlyGross',
        type: 'text'
      },
      {
        name: 'Employment Start',
        formControl: 'startDate',
        type: 'date'
      },
      {
        name: 'Employment End',
        formControl: 'endDate',
        type: 'date'
      }
    ];
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(30);
    this.createTableFormsControls();
  }

}
