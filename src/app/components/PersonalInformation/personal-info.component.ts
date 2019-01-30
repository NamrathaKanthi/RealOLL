import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { SharedServiceService } from "../../services/shared-service.service";
import { ProgressbarService } from "../../services/progressbar.service";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public tabs: any = [];
  public tabsCount: number = 0;
  public showText: boolean = false;
  public index = 0;
  public progressValue: any;

  @ViewChild(NgbTabset) tabset: NgbTabset;
  applicantNumberArray = [];
  personalInfo: FormGroup;

  constructor(private progress: ProgressbarService, private shared: SharedServiceService) {
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });
  }
  ngOnInit() {
    this.progress.changeInProgressBar$.next(20);
  }
}
