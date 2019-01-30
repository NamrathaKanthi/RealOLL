import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgressbarService {

  progressValue: any = 10;
  constructor() { }

  changeInProgressBar$ = new Subject<any>();

  get changeInProgress() {
    return this.changeInProgressBar$.asObservable();
  }

  changeInDate$ = new Subject<any>();

  get changeInDate() {
    return this.changeInDate$.asObservable();
  }
}
