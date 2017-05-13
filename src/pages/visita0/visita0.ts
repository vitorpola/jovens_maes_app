import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MothersService } from '../../providers/mothers-service'
import { RatingPage } from '../rating/rating';
import { Utils } from '../../providers/utils';

@Component({
	templateUrl: 'visita0.html',
	providers: [MothersService]
})
export class Visita0Page {
	@ViewChild(Slides) slides: Slides;

	forms = ['Identificação', 'Dados Socioeconômicos', 'Antencedentes Familiares',
		'Antecedentes Pessoais Gerais', 'Antecedentes Ginecológicos', 'Sexualidade',
		'Antecedentes Obstétricos', 'Gestação Atual', 'Exame Físico'];

	title = this.forms[0];

	constructor(public navCtrl: NavController, private utils: Utils) {
	}

	ionViewDidLoad() {

		var buttons = [
			{
				text: 'Não aceita',
				handler: () => {
					console.log('Disagree clicked');
				}
			},
			{
				text: 'Aceita',
				handler: () => {
					console.log('Agree clicked');
				}
			}];

		this.utils.showAlert('Aceite de Participação', 'A mãe aceita participar do programa Jovens Mães Cuidadoras?', buttons, false)
	}

	confirmButton() {

	}

	slideChanged() {
		this.title = this.forms[this.slides.getActiveIndex()]
	}
}
