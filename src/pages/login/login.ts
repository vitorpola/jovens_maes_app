import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Utils } from '../../providers/utils';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {};

  constructor(private nav: NavController, private utils:Utils) { }

  public login() {
    this.nav.setRoot(HomePage);
    this.utils.events.publish('menu:update');
    /*
    this.utils.showLoading();
    this.auth.login(this.user).subscribe(data => {
      if (data) {
        localStorage.setItem("auth_token", data.auth_token);
        var avatar = data.user.url_avatar == "/avatars/original/missing.png" ? "assets/img/anonymous.png" : data.user.url_avatar;
        this.auth.setUserInfo({ id: data.user.id, avatar: avatar, name: data.user.name, company_name: data.company.name, company_id: data.company.id });
        setTimeout(() => {
          this.nav.setRoot(DashboardIndexPage);
          this.utils.hideLoading();
        });
      } else {
        this.utils.showError("Usuário e/ou senha inválidos.");
      }
    }, error => {
      if (error.status == 0)
        this.utils.showError('Erro ao conectar à API');
      else
        this.utils.showError(error);
    });
    */
  }


}
