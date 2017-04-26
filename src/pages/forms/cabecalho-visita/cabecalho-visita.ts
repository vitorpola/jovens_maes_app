import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CabecalhoVisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'cabecalho-visita',
  templateUrl: 'cabecalho-visita.html'
})
export class CabecalhoVisita {

  @Input() planoAnterior: string;
  @Input() impressoesAnteriores: string;

  impressoesAnteriores_newline: Array<string>;
  planoAnterior_newline: Array<string>;

  /* This is run before the view is setup and the @Input variables have not been set yet! */
  constructor(public navCtrl: NavController) {}

  /*
  	This is run right after the view is setup. This means that the @Input variables
  	can be used now.
  */
  ngOnInit() {
  	this.impressoesAnteriores_newline = this.impressoesAnteriores.split('\n');
  	this.planoAnterior_newline = this.planoAnterior.split('\n');
  }

  ionViewDidLoad() {
    console.log('Hello CabecalhoVisita Page');
  }

}
