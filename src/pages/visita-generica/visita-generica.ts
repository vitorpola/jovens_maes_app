import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'visita-generica.html',
})
export class VisitaGenericaPage {

	pageTitle: string;
	visitNumber: number;
  planoAnterior: string;
  impressoesAnteriores: string;
  
	constructor(public navParams: NavParams) {
		this.visitNumber =  this.navParams.get('n');
  	this.pageTitle = "Visita " + this.visitNumber;
    this.planoAnterior = "Caros amigos, a execução dos pontos do programa oferece uma interessante oportunidade para verificação dos conhecimentos estratégicos para atingir a excelência. Por outro lado, o julgamento imparcial das eventualidades agrega valor ao estabelecimento do levantamento das variáveis envolvidas. Assim mesmo, o consenso sobre a necessidade de qualificação exige a precisão e a definição de todos os recursos funcionais envolvidos. No entanto, não podemos esquecer que a revolução dos costumes ainda não demonstrou convincentemente que vai participar na mudança das regras de conduta normativas. Evidentemente, a determinação clara de objetivos apresenta tendências no sentido de aprovar a manutenção das novas proposições. Pensando mais a longo prazo, o desenvolvimento contínuo de distintas formas de atuação assume importantes posições no estabelecimento dos paradigmas corporativos. Acima de tudo, é fundamental ressaltar que o início da atividade geral de formação de atitudes cumpre um papel essencial na formulação do remanejamento dos quadros funcionais.";
    this.impressoesAnteriores = "As experiências acumuladas demonstram que a competitividade nas transações comerciais deve passar por modificações independentemente do impacto na agilidade decisória. Percebemos, cada vez mais, que a expansão dos mercados mundiais causa impacto indireto na reavaliação das diversas correntes de pensamento. O cuidado em identificar pontos críticos no comprometimento entre as equipes acarreta um processo de reformulação e modernização das formas de ação."
 	}

}