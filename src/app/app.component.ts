import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OLL-UI';
  showSubmittedApps: boolean = false;

  constructor(private router: Router) { }

  displayPrint(print) {
    console.log(print);
  }

  ngDoCheck() {
    if (this.router.url === '/submittedApps') {
      this.showSubmittedApps = true;
    }
    else {
      this.showSubmittedApps = false;
    }
  }
}
