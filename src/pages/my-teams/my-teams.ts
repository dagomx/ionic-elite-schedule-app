import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  // For navigation
  // 1) First inject NavController
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  // For navigation
  // 2) Push page onto the stack
  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

}
