import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {
  favorites = [
    {
      "coach": "James",
      "division": "6th grade",
      "id": 812,
      "name": "Baltimore Stars"
    },
    {
      "coach": "Bartlett",
      "division": "6th grade",
      "id": 814,
      "name": "DC Assault"
    },
    {
      "coach": "Johnson",
      "division": "6th grade",
      "id": 828,
      "name": "MADE Elite"
    }
  ];

  // For navigation
  // 1) First inject NavController
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  // For navigation
  // 2) Push page onto the stack
  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

}
