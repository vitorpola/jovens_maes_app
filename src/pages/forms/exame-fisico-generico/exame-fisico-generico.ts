import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExameFisicoGenerico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'exame-fisico-generico',
  templateUrl: 'exame-fisico-generico.html'
})
export class ExameFisicoGenerico {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExameFisicoGenerico Page');
  }

}
