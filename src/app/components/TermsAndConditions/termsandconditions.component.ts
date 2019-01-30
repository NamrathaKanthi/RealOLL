import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/services/progressbar.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss']
})
export class TermsandconditionsComponent implements OnInit {

  termsForms: FormGroup;
  constructor(private progress: ProgressbarService, private fb: FormBuilder, private shared: SharedServiceService) {
    this.termsForms = this.fb.group({
      agree: new FormControl('', Validators.required)
    });
    this.shared.termsObject = this.termsForms;
  }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(80);
  }

}
