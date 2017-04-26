import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Visita0Page } from '../pages/visita0/visita0';
import { VisitaGenericaPage } from '../pages/visita-generica/visita-generica';
import { AboutPage } from '../pages/about/about';
import { CalendarPage } from '../pages/calendar/calendar';
import { SearchPage } from '../pages/search/search';
import { RatingPage } from '../pages/rating/rating';
import { MotherOverviewPage } from '../pages/mother-overview/mother-overview';
import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';
import { LibraryPage } from '../pages/library/library';

import { ExameFisicoGenerico } from '../pages/forms/exame-fisico-generico/exame-fisico-generico';
import { ExameFisicoCabecalho } from '../pages/forms/exame-fisico-cabecalho/exame-fisico-cabecalho';
import { HabitosRotinas } from '../pages/forms/habitos-rotinas/habitos-rotinas';
import { Queixas } from '../pages/forms/queixas/queixas';
import { PreparacaoVisitas } from '../pages/preparacao-visitas/preparacao-visitas';
import { SobreAVisita } from '../pages/forms/sobre-a-visita/sobre-a-visita';
import { CabecalhoVisita } from '../pages/forms/cabecalho-visita/cabecalho-visita';
import { Identificacao } from '../pages/forms/identificacao/identificacao';
import { Socioeconomicos } from '../pages/forms/socioeconomicos/socioeconomicos';
import { Sexualidade } from '../pages/forms/sexualidade/sexualidade';
import { GestacaoAtual } from '../pages/forms/gestacao-atual/gestacao-atual';
import { ExameFisicoVisita0 } from '../pages/forms/exame-fisico-visita-0/exame-fisico-visita-0';
import { AntecedentesPessoais } from '../pages/forms/antecedentes-pessoais/antecedentes-pessoais';
import { AntecedentesObstetricos } from '../pages/forms/antecedentes-obstetricos/antecedentes-obstetricos';
import { AntecedentesGinecologicos } from '../pages/forms/antecedentes-ginecologicos/antecedentes-ginecologicos';
import { AntecedentesFamiliares } from '../pages/forms/antecedentes-familiares/antecedentes-familiares';

import { Utils } from '../providers/utils';
import { MothersService } from '../providers/mothers-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,

    Visita0Page,
    VisitaGenericaPage,
    AboutPage,
    LibraryPage,
    CalendarPage,
    ExameFisicoGenerico,
    ExameFisicoCabecalho,
    HabitosRotinas,
    Queixas,
    PreparacaoVisitas,
    SobreAVisita,
    CabecalhoVisita,
    Identificacao,
    Socioeconomicos,
    Sexualidade,
    GestacaoAtual,
    ExameFisicoVisita0,
    AntecedentesFamiliares,
    AntecedentesGinecologicos,
    AntecedentesObstetricos,
    AntecedentesPessoais,
    SearchPage,
    RatingPage,
    MotherOverviewPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Visita0Page,
    VisitaGenericaPage,
    AboutPage,
    LibraryPage,
    CalendarPage,
    ExameFisicoGenerico,
    ExameFisicoCabecalho,
    HabitosRotinas,
    Queixas,
    PreparacaoVisitas,
    SobreAVisita,
    CabecalhoVisita,
    Identificacao,
    Socioeconomicos,
    Sexualidade,
    GestacaoAtual,
    ExameFisicoVisita0,
    AntecedentesFamiliares,
    AntecedentesGinecologicos,
    AntecedentesObstetricos,
    AntecedentesPessoais,
    SearchPage,
    RatingPage,
    MotherOverviewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Utils,
    MothersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
