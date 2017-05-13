import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
