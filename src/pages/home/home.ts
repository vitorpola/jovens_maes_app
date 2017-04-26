import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private utils:Utils) {
    this.utils.events.publish('title:update', 'Home');
  }

}
