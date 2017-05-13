import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VisitaGenericaPage } from '../visita-generica/visita-generica';
import { Visita0Page } from '../visita0/visita0';
import { MothersService } from '../../providers/mothers-service';

@Component({
  selector: 'page-mother-overview',
  templateUrl: 'mother-overview.html'
})
export class MotherOverviewPage {

  mother: any = {};
  params: {};
  visitasAnteriores: Array<any>;
  visita: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mothersService: MothersService) {
  }

  ionViewDidLoad() {
    this.mothersService.getMotherById(this.navParams.get('id')).subscribe(data => {
      this.mother = data;
      this.getVisitasAnteriores(data.next_visit);
    })
  }

  onClick(n_visita) {
    if (n_visita == 0) this.navCtrl.push(Visita0Page);
    else this.navCtrl.push(VisitaGenericaPage, { n: n_visita });
  }

  getVisitasAnteriores(n_visit) {
    this.visitasAnteriores = [];
    for (var i = n_visit; i >= 0; i--) {
      var r = i % 5 + 1;
      this.visita = { n: i, rating: r, name: "Visita " + i, src: "assets/img/" + r + "-alternative2.png" };
      this.visitasAnteriores.push(this.visita);
    }
  }
}
