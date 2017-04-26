import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Identificacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'identificacao',
  templateUrl: 'identificacao.html'
})
export class Identificacao {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Identificacao Page');
  }

}
