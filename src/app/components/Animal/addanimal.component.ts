import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarService } from 'src/app/services/progressbar.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.scss']
})
export class AddanimalComponent implements OnInit {

  public formFields = [];
  public title: string;
  public tabs = [];
  public tabsCount = 0;
  genderData = [];
  public keyName: string;
  @ViewChild(NgbTabset) tabset: NgbTabset;


  constructor(private fb: FormBuilder, private progress: ProgressbarService, private shared: SharedServiceService) {
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });
  }

  createTableFormsControls() {
    this.title = 'Add Animal';
    this.keyName = 'animals';
    this.formFields = [
      {
        name: 'Name',
        formControl: 'name',
        type: 'text'
      },
      {
        name: 'Breed',
        formControl: 'breed',
        type: 'text'
      },
      {
        name: 'Weight',
        formControl: 'weight',
        type: 'text'
      },
      {
        name: 'Gender',
        formControl: 'gender',
        type: 'select',
        data: this.shared.genderOptions
      },
      {
        name: 'Declawed',
        formControl: 'declawed',
        type: 'select',
        data: this.shared.options
      },
      {
        name: 'Where is Pet Kept?',
        formControl: 'whereIsPet',
        type: 'text'
      },
      {
        name: 'Type',
        formControl: 'type',
        type: 'text'
      },
      {
        name: 'Color',
        formControl: 'color',
        type: 'text'
      },
      {
        name: 'Age',
        formControl: 'age',
        type: 'text'
      },
      {
        name: 'Neutered',
        formControl: 'neutered',
        type: 'select',
        data: this.shared.options
      },
      {
        name: 'Current Rabies Shot?',
        formControl: 'currentRabies',
        type: 'select',
        data: this.shared.options
      }
    ];
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(40);
    this.createTableFormsControls();
  }

}
