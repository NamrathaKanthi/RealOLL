import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-dynamictable',
  templateUrl: './dynamictable.component.html',
  styleUrls: ['./dynamictable.component.scss']
})
export class DynamictableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() formFields: any;
  @Input() title: string;
  @Input() keyName: string;
  public tablesForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private shared: SharedServiceService) {
  }

  addEmployerDetails() {
    const employeeDetailsFormGroup = this.fb.group({});
    this.formFields.forEach(field => {
      employeeDetailsFormGroup.addControl(field.formControl, this.fb.control('', Validators.required));
    });
    return employeeDetailsFormGroup;
  }
  get employeeRows() {
    const key = this.keyName;
    return (<FormArray>this.tablesForm.get(key));
  }
  addEmployerToFormArray() {
    this.employeeRows.push(this.addEmployerDetails());
    this.shared.childFormValues = this.tablesForm;
  }
  deleteRecord(index) {
    this.employeeRows.removeAt(index);
    this.shared.childFormValues = this.tablesForm;
  }
  ngOnChanges(changes: SimpleChanges) {
    const key = this.keyName;
    this.tablesForm = this.fb.group({
      [key]: this.fb.array([this.addEmployerDetails()])
    });
    this.shared.childFormValues = this.tablesForm;
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnInit() { }

}
