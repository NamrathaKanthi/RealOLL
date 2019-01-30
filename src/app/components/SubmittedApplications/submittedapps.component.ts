import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submittedapps',
  templateUrl: './submittedapps.component.html',
  styleUrls: ['./submittedapps.component.scss']
})
export class SubmittedappsComponent implements OnInit {
  submittedApps = [];
  constructor() { }

  ngOnInit() {
    this.submittedApps = [{ address: 'afssfsa', dateSubmitted: 'sff' }, { address: 'gfgf', dateSubmitted: 'svgfgfdff' }, { address: 'fgfgfgvf', dateSubmitted: 'sdfddfdfff' }];
  }

}
