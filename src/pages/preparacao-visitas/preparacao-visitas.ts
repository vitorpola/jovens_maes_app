import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PdfViewerPage } from '../pdf-viewer/pdf-viewer';

/*
  Generated class for the PreparacaoVisitas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
    this.navCtrl.push(PdfViewerPage, this.params);
  }

}
