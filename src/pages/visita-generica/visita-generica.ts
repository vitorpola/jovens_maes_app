import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the Visita1Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'visita-generica.html',
})
export class VisitaGenericaPage {

	pageTitle: string;
	visitNumber: number;
  planoAnterior: string;
  impressoesAnteriores: string;
  
	constructor(public navParams: NavParams) {
		this.visitNumber =  this.navParams.get('n');
  	this.pageTitle = "Visita " + this.visitNumber;
    this.planoAnterior = "Loremipsum dolor sit amet, in mel adhuc expetenda mnesarchum. Cu sea delenit nonumes gubergren, te tation propriae corrumpit mea. Vel dicit aliquid sensibus ad, pro et homero vituperatoribus, corrumpit percipitur contentiones ei quo. Mollis melius sit ea. Brute tempor persequeris ea pri, mel ne nobis nullam. Sumo fabellas prodesset vel cu, tollit menandri repudiare ut cum. \nPraesent suavitate vis ei, has ut adhuc nostro commodo. Atqui veniam consul an sit, et qui essent gubergren intellegebat. His purto singulis mandamus an, ne ius nibh munere forensibus, mea eu consul blandit constituam. Eos ad novum voluptua platonem. Sensibus tractatos referrentur mea ne, ad usu doming adolescens. Id modo fastidii interpretaris cum, quo cu veritus fuisset.";
    this.impressoesAnteriores = "Aperiri fastidii sed ea, vel conceptam philosophia ei, falli indoctum ne sea. Aeque saepe qui id, ei mea torquatos omittantur, ius an urbanitas honestatis. Ad est sonet assueverit, est ea magna oporteat consectetuer. Erat accusata ut has, impetus feugait placerat cu ius. Libris contentiones cu usu, tota possim efficiantur sed no. Ut graeci debitis ius. Fierent reformidans pri ea, qui cu libris malorum graecis. Brute harum mel ne. No labore definitionem his, mel eros dolor et.";;
 	}

}