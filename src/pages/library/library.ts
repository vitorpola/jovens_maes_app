import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../providers/utils'

@Component({
	selector: 'page-library',
	templateUrl: 'library.html'
})
export class LibraryPage {
	aplicativos: Array<any>;
	videos: Array<any>;
	apostilas: Array<any>;
	params = {};
	view = 'docs';

	constructor(private navCtrl: NavController, private utils: Utils) {
		this.utils.events.publish('title:update', 'Biblioteca');
		this.apostilas = [
			{
				titulo: "Manual de saúde mental da gestante / Portugal",
				caminho: "portugal.pdf"
			},
			{
				titulo: "Caderno de atenção ao pré natal de baixo risco / Ministério da saúde - 2012",
				caminho: "pre-natal.pdf"
			},
			{
				titulo: "Manual de Orientações sobre o Bolsa Família na Saúde",
				caminho: "bolsa-familia.pdf"
			},
			{
				titulo: "Kit Família Brasileira Fortalecida",
				caminho: "kit-unicef.pdf"
			},
			{
				titulo: "Guia gestante e bebê UNICEF 2011",
				caminho: "guia-unicef.pdf"
			},
			{
				titulo: "Guia alimentar para população brasileira",
				caminho: "guia-alimentar.pdf"
			},
			{
				titulo: "Saúde da criança: crescimento e desenvolvimento",
				caminho: "saude-da-crianca.pdf"
			}
		]

		this.videos = [
			{
				titulo: "Sinais e tipos de parto",
				caminho: "https://www.youtube.com/watch?v=2iSMIAprTPY",
				thumb: "video1.jpg"
			},
			{
				titulo: "Amamentação: muito mais do que alimentar a criança",
				caminho: "https://www.youtube.com/watch?v=i31VEa--XpE",
				thumb: "video3.jpg"
			},
			{
				titulo: "Posição do bebê na hora do parto",
				caminho: "http://brasil.babycenter.com/v25010947/posição-do-bebê-na-hora-do-parto-v%C3%ADdeo",
				thumb: 'video4.png'
			},
			{
				titulo: "Estou em trabalho de parto, e agora?",
				caminho: "https://www.youtube.com/watch?v=aEcun1y6of8",
				thumb: 'video2.jpg'
			}
		];


		this.aplicativos = [
			{
				titulo: "Village Life",
				caminho: "https://play.google.com/store/apps/details?id=com.playdemic.villagelife.android",
				thumb: 'app1.webp'
			},
			{
				titulo: "Pregnancy",
				caminho: "https://play.google.com/store/apps/details?id=com.hp.pregnancy.lite&hl=pt",
				thumb: 'app2.webp'
			},
			{
				titulo: "Babycenter",
				caminho: "https://play.google.com/store/apps/details?id=com.babycenter.pregnancytracker&hl=pt_BR",
				thumb: 'app3.webp'
			}
		];
	}

	openPdf(src: string, pageNum: number) {
		this.params = { src: "assets/pdf/" + src, page: pageNum };
		this.utils.showToast('Abrir Arquivo')
	}

}
