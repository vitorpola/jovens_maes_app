import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RatingPage } from '../../rating/rating';

/*
  Generated class for the ExameFisicoVisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'exame-fisico-visita-0',
  templateUrl: 'exame-fisico-visita-0.html'
})
export class ExameFisicoVisita0 {

  ratingPage = RatingPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ExameFisicoVisita Page');
  }

}
