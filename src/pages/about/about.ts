import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController, private utils: Utils) {
    this.utils.events.publish('title:update', 'Sobre');
  }
}
