import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';

@Component({
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(private navCtrl: NavController, private utils:Utils) {
    		this.utils.events.publish('title:update', 'Agenda');
  }

}
