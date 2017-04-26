import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RatingPage } from "../../rating/rating";

/*
  Generated class for the TabelaOutros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'sobre-a-visita',
  templateUrl: 'sobre-a-visita.html'
})
export class SobreAVisita {

  ratingPage = RatingPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabelaOutros Page');
  }

  confirmButton() {
  	this.navCtrl.push(this.ratingPage);
  }
}
