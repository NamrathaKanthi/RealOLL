import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/services/progressbar.service';

@Component({
  selector: 'app-paymentsucessful',
  templateUrl: './paymentsucessful.component.html',
  styleUrls: ['./paymentsucessful.component.scss']
})
export class PaymentsucessfulComponent implements OnInit {

  constructor(private progress: ProgressbarService) { }

  ngOnInit() {
    //this.progress.changeInProgressBar$.next(100);
  }

}
