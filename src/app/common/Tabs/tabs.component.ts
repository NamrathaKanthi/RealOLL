import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ChildActivationEnd } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-tabscomponent',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, DoCheck {

  public tabs: any = [];
  public tabsCount = 0;
  public showText = false;
  index = 0;

  @ViewChild(NgbTabset) tabset: NgbTabset;
  applicantNumberArray = [];
  personalInfo: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public shared: SharedServiceService) {
    this.shared.headingText = 'Personal Information';
    this.tabs.push({ title: 'Primary Applicant', id: this.tabsCount });
    this.personalInfo = this.fb.group({
      details: this.fb.array([this.createFormControls()])
    });
    this.shared.personalInfoFormDetails = this.personalInfo;
  }
  get personalInfoData() {
    return (<FormArray>this.personalInfo.get('details'));
  }
  addApplicantFn() {
    this.personalInfoData.push(this.createFormControls());
    this.tabs.push({ title: 'Application' });
    this.index = this.index + 1;
    this.setActiveTab(this.index, 'add');
    this.shared.personalInfoFormDetails = this.personalInfo;
  }

  setActiveTab(activeTabIndex, flag) {
    if (flag === 'add') {
      if (this.tabs.length === activeTabIndex || this.tabs.length < activeTabIndex) {
        activeTabIndex = this.tabs.length - 1;
      }
      this.tabset.activeId = `Application_${activeTabIndex}`;
    } else {
      activeTabIndex = parseInt(activeTabIndex, 10) - 1 + '';
      this.tabset.activeId = `Application_${activeTabIndex}`;
    }
  }
  deleteApplicantFn(event) {
    console.log(this.tabset.activeId);
    const applicants = this.personalInfoData;
    const index = this.tabset.activeId.split('_').pop();
    applicants.removeAt(parseInt(index, 10));
    this.tabs.splice(parseInt(index, 10), 1);
    this.setActiveTab(index, 'remove');
    this.shared.personalInfoFormDetails = this.personalInfo;
  }

  ngDoCheck() {
    this.router.events.subscribe((val) => {
      if (val instanceof ChildActivationEnd) {
        const main = this.router.url.split('/')[1];
        if (main === 'personal') {
          this.shared.headingText = 'Personal Information';
        }
        const child = this.router.url.split('/')[2];
        if (child === 'employer') {
          this.shared.headingText = 'Application 1 Employment';
        } else if (child === 'animal') {
          this.shared.headingText = 'Animal';
        } else if (child === 'vehicle') {
          this.shared.headingText = 'Vehicle';
        } else if (child === 'background-info') {
          this.shared.headingText = 'Background Information';
        }
      }
    });
  }
  createFormControls() {
    const personalDetailsGroup = this.fb.group({
      firstNameReq: new FormControl('', Validators.required),
      maidenName: new FormControl(''),
      homePhoneReq: new FormControl(''),
      middleNameReq: new FormControl('', Validators.required),
      none: new FormControl(''),
      licenseNumber: new FormControl(''),
      mobilePhoneReq: new FormControl('', [Validators.required,
      Validators.pattern('[\+]?[0-9]{0,1}[\-]?[(]?[0-9]{3}[)]?[- ]?[0-9]{3,4}[- ]?[0-9]{4,6}')]),
      lastNameReq: new FormControl('', Validators.required),
      driversLicenseNumberReq: new FormControl(''),
      ssnReq: new FormControl(''),
      suffixReq: new FormControl(''),
      licenseState: new FormControl(''),
      genderRequired: new FormControl('', Validators.required),
      birthDateReq: new FormControl('', Validators.required),
      currentAddress: new FormGroup({
        currentResidenceAddressReq: new FormControl('', Validators.required),
        currentResidenceLandlordNameReq: new FormControl(''),
        currentResidenceAddressContReq: new FormControl(''),
        landlordPhone: new FormControl(''),
        currentResidenceCityReq: new FormControl('', Validators.required),
        currentResidenceRentReq: new FormControl(''),
        currentResidenceStateReq: new FormControl('', Validators.required),
        currPeriod: new FormControl(''),
        currentResidenceZipPostalReq: new FormControl('', Validators.required),
        currMoveIn: new FormControl(null),
        currentResidenceTypeReq: new FormControl(''),
        currMoveOut: new FormControl(null)
      }),
      previousAddress: new FormGroup({
        residenceHistoryAddressReq: new FormControl(''),
        residenceHistoryLandlordNameReq: new FormControl(''),
        residenceHistoryAddressContReq: new FormControl(''),
        prevLandlordPhone: new FormControl(''),
        residenceHistoryTypeReq: new FormControl(''),
        residenceHistoryCityReq: new FormControl('', Validators.required),
        prevAmount: new FormControl(''),
        residenceHistoryStateReq: new FormControl('', Validators.required),
        prevPeriod: new FormControl(''),
        residenceHistoryZipPostalReq: new FormControl('', Validators.required),
        prevMoveIn: new FormControl(null),
        prevRent: new FormControl(''),
        prevMoveOut: new FormControl(null)
      })
    });
    return personalDetailsGroup;
  }

  ngOnInit() {
  }
}
