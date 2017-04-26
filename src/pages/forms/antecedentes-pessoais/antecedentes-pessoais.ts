import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AntecedentesPessoais page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'antecedentes-pessoais',
  templateUrl: 'antecedentes-pessoais.html'
})
export class AntecedentesPessoais {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AntecedentesPessoais Page');
  }

}
