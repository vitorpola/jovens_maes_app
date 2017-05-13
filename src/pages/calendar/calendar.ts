import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';

@Component({
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
          '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  constructor(private navCtrl: NavController, private utils:Utils) {
  }

}
