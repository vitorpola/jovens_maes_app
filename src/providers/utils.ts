import { Injectable, ViewChild } from '@angular/core';
import { Nav, LoadingController, Loading, AlertController, ToastController, ModalController, Events, Platform, ActionSheetController } from 'ionic-angular'
import 'rxjs/add/operator/map';

@Injectable()
export class Utils {

  @ViewChild(Nav) nav: Nav;
  loading: Loading;

  constructor(private loadingCtrl: LoadingController, private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController, public toastCtrl: ToastController,
    public modalCtrl: ModalController, public events: Events, public platform: Platform) { }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Falha',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  showToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500
    });
    toast.present();
    return toast;
  }

  showModal(page, params) {
    let modal = this.modalCtrl.create(page, params);
    modal.present();
    return modal;
  }

  showAlert(title, text, buttons, with_cancel, inputs?) {
    if (with_cancel) {
      buttons.unshift({
        text: 'Cancelar',
        handler: data => {
          alert.dismiss();
        }
      });
    }

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: buttons,
      inputs: inputs
    });
    alert.present();
  }

}
