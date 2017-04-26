import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MothersService } from '../../providers/mothers-service'
import { RatingPage } from '../rating/rating';

@Component({
  templateUrl: 'visita0.html',
  providers: [MothersService]
})
export class Visita0Page {
	ratingPage = RatingPage;

  	constructor(public navCtrl: NavController, public mothersService: MothersService) {}

  	confirmButton() {
  	if(this.mothersService.post({nome: 'Maria', endereco: 'casa da mae, 0', nurse_id: 1}))
  		this.navCtrl.push(this.ratingPage);
  }
}
