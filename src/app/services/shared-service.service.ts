import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private _nextClicked = false;
  private _headingText = '';
  private _personalInfoFormDetails: any;
  private _childFormValues: any;
  private _docuCheck = false;
  private _backgroundInfoValues: any;
  private _finalFormObject: any;
  private _employerObject: any;
  private _animalsObject: any;
  private _vehiclesObject: any;
  private _termsObject: any;
  private _isNextClicked = false;
  private _tenantAcceptanceForm: any;
  private _registerForm: any;
  public options: any;
  public genderOptions: any;
  public _dateSelected: any;

  public get tenantAcceptanceForm(): any {
    return this._tenantAcceptanceForm;
  }

  public set tenantAcceptanceForm(value: any) {
    this._tenantAcceptanceForm = value;
  }

  public get registerForm(): any {
    return this._registerForm;
  }

  public set registerForm(value: any) {
    this._registerForm = value;
  }

  public get isNextClicked() {
    return this._isNextClicked;
  }
  public set isNextClicked(value) {
    this._isNextClicked = value;
  }

  public get termsObject(): any {
    return this._termsObject;
  }
  public set termsObject(value: any) {
    this._termsObject = value;
  }

  constructor() {
    this.options = [
      {
        id: '0',
        name: 'Yes',
        value: '0'
      },
      {
        id: '1',
        name: 'No',
        value: '1'
      },
    ];
    this.genderOptions = [
      {
        id: '0',
        name: 'Male',
        value: 'M'
      },
      {
        id: '1',
        name: 'Female',
        value: 'F'
      },
    ];
  }

  public get vehiclesObject(): any {
    return this._vehiclesObject;
  }
  public set vehiclesObject(value: any) {
    this._vehiclesObject = value;
  }
  public get animalsObject(): any {
    return this._animalsObject;
  }
  public set animalsObject(value: any) {
    this._animalsObject = value;
  }
  public get employerObject(): any {
    return this._employerObject;
  }
  public set employerObject(value: any) {
    this._employerObject = value;
  }
  public get finalFormObject(): any {
    return this._finalFormObject;
  }
  public set finalFormObject(value: any) {
    this._finalFormObject = value;
  }

  public get backgroundInfoValues(): any {
    return this._backgroundInfoValues;
  }
  public set backgroundInfoValues(value: any) {
    this._backgroundInfoValues = value;
  }
  public get docuCheck() {
    return this._docuCheck;
  }
  public set docuCheck(value) {
    this._docuCheck = value;
  }
  public get childFormValues(): any {
    return this._childFormValues;
  }
  public set childFormValues(value: any) {
    this._childFormValues = value;
  }
  public get personalInfoFormDetails(): any {
    return this._personalInfoFormDetails;
  }
  public set personalInfoFormDetails(value: any) {
    this._personalInfoFormDetails = value;
  }
  public get headingText() {
    return this._headingText;
  }
  public set headingText(value) {
    this._headingText = value;
  }
  public get nextClicked() {
    return this._nextClicked;
  }
  public set nextClicked(value) {
    this._nextClicked = value;
  }

  public get dateSelected() {
    return this._dateSelected;
  }

  public set dateSelected(value) {
    this._dateSelected = value;
  }
}
