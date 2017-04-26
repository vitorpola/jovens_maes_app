import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AntecedentesFamiliares page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'antecedentes-familiares',
  templateUrl: 'antecedentes-familiares.html'
})
export class AntecedentesFamiliares {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AntecedentesFamiliares Page');
  }

}
