import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Rutas principales
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { CursosOnlineComponent } from './pages/capacitaciones/cursos-online/cursos-online.component';
import { FacebookLiveOpenComponent } from './pages/capacitaciones/facebook-live-open/facebook-live-open.component';
import { FacebookLiveComponent } from './pages/capacitaciones/facebook-live/facebook-live.component';
import { ConstructorComponent } from './pages/home/constructor/constructor.component';
import { PreHomeComponent } from './pages/home/pre-home/pre-home.component';
import { HerramientasComponent } from './pages/soluciones/herramientas/herramientas.component';
import { InternaComponent } from './pages/soluciones/interna/interna.component';
import { VideoTipsComponent } from './pages/soluciones/video-tips/video-tips.component';
import { PublicComponent } from './pages/public/public.component';
import { BodyComponent } from './components/body/body.component';
import { ClientComponent } from './pages/client/client.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OtrosCursosComponent } from './components/otros-cursos/otros-cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { HerramientasOptionsComponent } from './components/herramientas-options/herramientas-options.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { PerfilComponent } from './pages/user/perfil/perfil.component';
import { OtrasHerramientasComponent } from './components/otras-herramientas/otras-herramientas.component';

import { ColumnasPlacasVigasComponent } from './components/calculadora-materiales/columnas-placas-vigas/columnas-placas-vigas.component';
import { MuroContencionComponent } from './components/calculadora-materiales/muro-contencion/muro-contencion.component';
import { ProgramaProfesionalComponent } from './pages/programa-profesional/programa-profesional.component';
import { ZapatasColumnasMurosComponent } from './components/calculadora-materiales/zapatas-columnas-muros/zapatas-columnas-muros.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ModulosComponent } from './pages/programa-profesional/modulos/modulos.component'; // reCaptcha
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaFacebookLiveComponent } from './components/lista-facebook-live/lista-facebook-live.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { ShowMoreComponent } from './components/lista-cursos/show-more/show-more.component';
import { CimientosComponent } from './components/calculadora-materiales/cimientos/cimientos.component';
import { SobrecimientosComponent } from './components/calculadora-materiales/sobrecimientos/sobrecimientos.component';
import { MatriculaComponent } from './pages/programa-profesional/matricula/matricula.component';

//fecha
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SafePipeModule } from 'safe-pipe';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CursosOnlineComponent,
    ShowMoreComponent,
    FacebookLiveComponent,
    FacebookLiveOpenComponent,
    ConstructorComponent,
    PreHomeComponent,
    HerramientasComponent,
    InternaComponent,
    ViewComponentComponent,
    VideoTipsComponent,
    PublicComponent,
    BodyComponent,
    ClientComponent,
    FooterComponent,
    HeaderComponent,
    OtrosCursosComponent,
    ListaCursosComponent,
    HerramientasOptionsComponent,
    SliderHomeComponent,
    PerfilComponent,
    OtrasHerramientasComponent,
    CimientosComponent,
    SobrecimientosComponent,
    ColumnasPlacasVigasComponent,
    MuroContencionComponent,
    ProgramaProfesionalComponent,
    ZapatasColumnasMurosComponent,
    ModulosComponent,
    ListaFacebookLiveComponent,
    WebinarsComponent,
    MatriculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    NgxPaginationModule,
    SafePipeModule
  ],
  providers: [
    Location,
    {
      provide: LOCALE_ID, useValue: 'es'
    },
    // {
    //    provide: LocationStrategy,
    //    //provide: LOCALE_ID, ,
    //    useClass: PathLocationStrategy
    // }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
