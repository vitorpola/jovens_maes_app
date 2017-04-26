import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GestacaoAtual page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'gestacao-atual',
  templateUrl: 'gestacao-atual.html'
})
export class GestacaoAtual {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GestacaoAtual Page');
  }

}
