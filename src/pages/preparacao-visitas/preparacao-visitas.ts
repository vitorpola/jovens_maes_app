import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'preparacao-visitas',
  templateUrl: 'preparacao-visitas.html'
})
export class PreparacaoVisitas {

  @Input() visitNumber: number;
  params = {};

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PreparacaoVisitas Page');
  }

  openPdf(src: string, pageNum: number) {
    this.params = {src: "../../assets/pdf/" + src, page: pageNum};
  }

}
