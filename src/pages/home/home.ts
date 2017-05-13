import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils';
import { MothersService } from '../../providers/mothers-service';
import { Chart } from 'chart.js';
import { MotherOverviewPage } from '../mother-overview/mother-overview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  today_mothers: Array<any> = [];



  constructor(public navCtrl: NavController, private utils: Utils, private mothers: MothersService) {
  }

  ionViewDidLoad() {
    this.mothers.getMothers().subscribe(data => {
      this.today_mothers = data;
    });
    this.initialize();
  }

  showMother(mother_id){
    this.navCtrl.push(MotherOverviewPage, {id: mother_id});
  }

  private initialize() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Péssima", "Ruim", "Regular", "Boa", "Ótima"],
        datasets: [{
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

}
