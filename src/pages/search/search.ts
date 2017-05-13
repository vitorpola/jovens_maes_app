import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';
import { MotherOverviewPage } from '../mother-overview/mother-overview';
import { MothersService } from '../../providers/mothers-service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  mothers: Array<any> = []

  constructor(public navCtrl: NavController, private utils: Utils, private mothersService: MothersService) {
    this.initializeMothers();
  }

  initializeMothers() {
    this.mothersService.getMothers().subscribe(data => {
      this.mothers = data;
    });
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

  onClick(mother_id) {
    this.navCtrl.push(MotherOverviewPage, { id: mother_id });
  }

}
