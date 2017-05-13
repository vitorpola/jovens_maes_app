import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Utils } from '../providers/utils';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { LibraryPage } from '../pages/library/library';
import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;

  rootPage: any = LoginPage;
  pages: Array<any> = [];
  title: String = 'Title';
  showMenu: Boolean = false;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private utils: Utils) {
    this.pages = [
      { title: 'Visão Geral', component: HomePage, icon: 'md-speedometer' },
      { title: 'Biblioteca', component: LibraryPage, icon: 'bookmarks' },
      { title: 'Prontuário', component: SearchPage, icon: 'md-filing' },
      { title: 'Agenda', component: CalendarPage, icon: 'calendar' },
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.utils.events.subscribe('menu:update', (args) => {this.showMenu = !this.showMenu})
    this.utils.events.subscribe('title:update', (args) => {this.title = args});
  }

  openPage(page: any): void {
    this.menu.enable(true);
    this.nav.setRoot(page.component);
    this.menu.close();
  }

  logout() {
    this.menu.close();
    this.nav.setRoot(LoginPage);
    this.showMenu = false;
  }
}

