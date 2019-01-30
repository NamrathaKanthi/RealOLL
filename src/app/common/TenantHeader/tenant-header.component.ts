import { Component, OnInit, DoCheck } from '@angular/core';
import { ProgressbarService } from "../../services/progressbar.service";
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tenant-header',
  templateUrl: './tenant-header.component.html',
  styleUrls: ['./tenant-header.component.scss']
})
export class TenantHeaderComponent implements OnInit, DoCheck {

  progressValue: any = 10;
  registration: boolean;
  progress: boolean;
  print: boolean = false;

  constructor(private progressBar: ProgressbarService, private router: Router, private dropdown: NgbDropdownConfig) {
    dropdown.autoClose = true;
  }

  changeInViewFn() {
    this.router.navigate(['submittedApps']);
  }

  printApp() {
    window.print();
  }

  ngDoCheck() {
    if (this.router.url === '/personal') {
      this.registration = true;
    }
    if (this.router.url === '/paymentSuccess') {
      this.progress = false;
    }
    else {
      this.registration = false;
      this.progress = true;
    }
  }

  ngOnInit() {
    this.progressBar.changeInProgress.subscribe((value) => {
      this.progressValue = value;
      setTimeout(() => {
        this.progressValue = value;
      }, 1000);
    });
  }

}
