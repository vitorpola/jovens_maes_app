import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';

import { Visita0Page } from '../visita0/visita0';
import { VisitaGenericaPage } from '../visita-generica/visita-generica';
import { MotherOverviewPage } from '../mother-overview/mother-overview';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  mothers: Array<{name: string, visita: number}>

  visita0Page = Visita0Page;
  visitaGenericaPage = VisitaGenericaPage;
  motherOverviewPage = MotherOverviewPage;
  params = {};

  constructor(public navCtrl: NavController, private utils:Utils) {
    this.utils.events.publish('title:update', 'Consultas');

  	this.initializeMothers();
  }

  initializeMothers() {
  	this.mothers = [];
  	for (var i = 0; i <= 40; i++){
  		this.mothers.push({name: "Mãe " + i, visita: i});
  	}
  	this.mothers.push({name: "Maria do carmo", visita: 41});
  	this.mothers.push({name: "Joana banana", visita: 42});
  	this.mothers.push({name: "Nancinha", visita: 43});
  } 

  getMothers(ev: any) {
  	this.initializeMothers();
  	let val = ev.target.value;
  	if (val && val.trim() != '') {
  		this.mothers = this.mothers.filter((mother) => {
  			return (mother.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  		})
  	}
  }

  onClick(mother: {name: string, visita: number}) {
      this.params = { mother: {name: mother.name, visita: mother.visita} };
      this.navCtrl.push(this.motherOverviewPage, this.params);
  }

  ionViewDidLoad() {
    console.log('Hello Search Page');
  }

}
