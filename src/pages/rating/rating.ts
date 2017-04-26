import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Rating page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class RatingPage {

  homePage = HomePage;
  ratingValue: string;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Rating Page');
  }

  backButton() {
  	this.navCtrl.pop();
  }

  confirmButton() {
  	this.navCtrl.setRoot(this.homePage);
  }

  onClick(rating: string) {
    this.ratingValue = rating;
  }

}
