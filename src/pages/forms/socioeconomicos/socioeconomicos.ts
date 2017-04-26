import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Socioeconomicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'socioeconomicos',
  templateUrl: 'socioeconomicos.html'
})
export class Socioeconomicos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Socioeconomicos Page');
  }

}
