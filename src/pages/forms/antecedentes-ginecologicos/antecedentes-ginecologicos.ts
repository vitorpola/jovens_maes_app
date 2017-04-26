import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AntecedentesGinecologicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'antecedentes-ginecologicos',
  templateUrl: 'antecedentes-ginecologicos.html'
})
export class AntecedentesGinecologicos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AntecedentesGinecologicos Page');
  }

}
