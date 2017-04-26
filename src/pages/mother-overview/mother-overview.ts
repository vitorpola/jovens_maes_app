import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VisitaGenericaPage } from '../visita-generica/visita-generica';
import { Visita0Page } from '../visita0/visita0';

@Component({
  selector: 'page-mother-overview',
  templateUrl: 'mother-overview.html'
})
export class MotherOverviewPage {

  mother: {name: string, visita: number};
  params: {};
  visitasAnteriores: Array<{n: number, rating: number, name: string, src: string}>;
  visita: {n: number, rating: number, name: string, src: string};

  visitaGenericaPage = VisitaGenericaPage;
  visita0Page = Visita0Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.mother =  this.navParams.get('mother');
    this.getVisitasAnteriores();
  }

  ionViewDidLoad() {
    console.log('Hello MotherOverview Page');
  }

  onClick(n_visita: number) {
  	if (this.mother.visita == 0){
  		this.navCtrl.push(this.visita0Page);
  	}
  	else {
  		this.params = { n: n_visita };
  		this.navCtrl.push(this.visitaGenericaPage, this.params);
  	}
  }

  getVisitasAnteriores() {
	this.visitasAnteriores = [];
  	for (var i = this.mother.visita - 1; i >= 0; i--) {
      var r = i % 5 + 1;
  		this.visita = {n: i, rating: r, name: "Visita " + i, src: "assets/img/" + r + "-alternative2.png"};
  		this.visitasAnteriores.push(this.visita);
  	}
  }
}
