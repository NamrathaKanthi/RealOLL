import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-docusign',
  templateUrl: './docusign.component.html',
  styleUrls: ['./docusign.component.scss']
})
export class DocusignComponent implements OnInit {

  constructor(private shared: SharedServiceService, private progress: ProgressbarService) { }

  ngOnInit() {
    this.progress.changeInProgressBar$.next(95);
  }

}
