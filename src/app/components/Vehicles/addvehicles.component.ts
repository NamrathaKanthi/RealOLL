import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-addvehicles',
  templateUrl: './addvehicles.component.html',
  styleUrls: ['./addvehicles.component.scss']
})
export class AddvehiclesComponent implements OnInit {

  public formFields = [];
  public title: string;
  public tabs = [];
  public tabsCount = 0;
  public keyName: string;

  @ViewChild(NgbTabset) tabset: NgbTabset;

  constructor(private fb: FormBuilder, private progress: ProgressbarService) {
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });
  }

  createTableFormsControls() {
    this.title = 'Add Vehicle';
    this.keyName = 'vehicles';
    this.formFields = [
      {
        name: 'Type',
        formControl: 'type',
        type: 'text'
      },
      {
        name: 'Model',
        formControl: 'model',
        type: 'text'
      },
      {
        name: 'Year',
        formControl: 'year',
        type: 'text'
      },
      {
        name: 'Make',
        formControl: 'make',
        type: 'text'
      },
      {
        name: 'Color',
        formControl: 'color',
        type: 'text'
      },
      {
        name: 'License Plate Number',
        formControl: 'license',
        type: 'text'
      },
      {
        name: 'State Registered',
        formControl: 'state',
        type: 'text'
      },
      {
        name: 'Employment End',
        formControl: 'endDate',
        type: 'text'
      }
    ];
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(50);
    this.createTableFormsControls();
  }

}
