import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() config: Config;

  constructor() { }

  ngOnInit() { }

}

export class Config {
  cardHeading: string;
  cardText1: string;
  cardText2: string;
}
