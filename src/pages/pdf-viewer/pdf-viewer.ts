import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the PdfViewer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html'
})
export class PdfViewerPage {

  pdfSrc: string;
  page: number;
  pdf: any;
  numPages: number;
  loader: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private loadingCtrl: LoadingController) {
    /* The pdf-viewer seems to ignore the value on this.page when loading the pdf.
       Because of this, it always loads the pdf on page 1 and we have to force it 
       to change pages. This is done on ionViewDidEnter(). A better solution is 
       obviously needed, but this will have to do for now. 
    */
    this.loader = this.loadingCtrl.create({
      content: "Por favor, aguarde..."
    });
    this.loader.present();
    this.page = navParams.get("page") - 1; 
    this.pdfSrc = navParams.get("src");
	  this.afterLoadComplete = this.afterLoadComplete.bind(this);
  }

  ionViewDidLoad() {
    console.log('Hello PdfViewerPage Page');
  }

  nextPage() {
  	if (this.page < this.numPages) this.page++;
  }

  previousPage() {
  	if (this.page > 1) this.page--;
  }

  afterLoadComplete(pdf: any){
  	this.pdf = pdf;
  	this.numPages = this.pdf.numPages;
    this.loader.dismissAll();
  }

  /* This happens after afterLoadComplete() */
  ionViewDidEnter() {
    this.nextPage(); /* Force the pdf to change pages */
  }

}
