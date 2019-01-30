import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-background-info',
  templateUrl: './background-info.component.html',
  styleUrls: ['./background-info.component.scss']
})
export class BackgroundInfoComponent implements OnInit, OnDestroy {

  public tabs = [];
  public tabsCount = 0;

  @ViewChild(NgbTabset) tabset: NgbTabset;

  backgroundInfo = new FormGroup({
    select: new FormControl(''),
    reason: new FormControl(''),
    select1: new FormControl(''),
    reason1: new FormControl(''),
    select2: new FormControl(''),
    reason2: new FormControl(''),
  });
  constructor(private shared: SharedServiceService, private progress: ProgressbarService) {
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });

    const backgroundInfoObject = { 'backgroundInfo': this.backgroundInfo.value };
    this.shared.backgroundInfoValues = backgroundInfoObject;
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(60);
  }
  ngOnDestroy() {
    const backgroundInfoObject = { 'backgroundInfo': this.backgroundInfo.value };
    this.shared.backgroundInfoValues = backgroundInfoObject;
  }

}
