import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Queixas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'queixas',
  templateUrl: 'queixas.html'
})
export class Queixas {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Queixas Page');
  }

}
