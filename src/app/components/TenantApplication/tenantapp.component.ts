import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProgressbarService } from 'src/app/services/progressbar.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-tenantapp',
  templateUrl: './tenantapp.component.html',
  styleUrls: ['./tenantapp.component.scss']
})
export class TenantappComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  tenantForm: FormGroup;
  jsonData: {};
  date: any;
  constructor(private progress: ProgressbarService, private shared: SharedServiceService, private fb: FormBuilder, private http: HttpService) {
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(10);

    this.http.getJson().subscribe((res: any) => {
      this.jsonData = res;
    });

    this.tenantForm = this.fb.group({
      moveInDate: new FormControl('', Validators.required),
      accept: new FormControl('', Validators.required)
    });
    this.shared.tenantAcceptanceForm = this.tenantForm;
  }
}
