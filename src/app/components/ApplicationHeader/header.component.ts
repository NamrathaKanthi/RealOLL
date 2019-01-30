import { Component, OnInit } from '@angular/core';
import { Config } from "../../common/cards/cards.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerConfig1: Config;
  headerConfig2: Config;
  headerConfig3: Config;

  constructor() { }

  ngOnInit() {
    this.headerConfig1 = {
      cardHeading: "Access Property Management Group",
      cardText1: "4546 Lake Michigan Dr, 91 Office",
      cardText2: "Allendake, MI 49401"
    }
    this.headerConfig2 = {
      cardHeading: "Contact",
      cardText1: "leasing@accessinggroup.com or",
      cardText2: "616-301-9450"
    }
    this.headerConfig3 = {
      cardHeading: "Leasing Office hours",
      cardText1: "Monday,Wednesday,Thursday 9am - 5pm",
      cardText2: "Closed Tuesday and Friday"
    }
  }

}
