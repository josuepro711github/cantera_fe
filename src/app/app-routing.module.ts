import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { CursosOnlineComponent } from './pages/capacitaciones/cursos-online/cursos-online.component';
import { FacebookLiveOpenComponent } from './pages/capacitaciones/facebook-live-open/facebook-live-open.component';
import { FacebookLiveComponent } from './pages/capacitaciones/facebook-live/facebook-live.component';
import { ClientComponent } from './pages/client/client.component';
import { ConstructorComponent } from './pages/home/constructor/constructor.component';
import { PreHomeComponent } from './pages/home/pre-home/pre-home.component';
import { ModulosComponent } from './pages/programa-profesional/modulos/modulos.component';
import { ProgramaProfesionalComponent } from './pages/programa-profesional/programa-profesional.component';

import { PublicComponent } from './pages/public/public.component';
import { HerramientasComponent } from './pages/soluciones/herramientas/herramientas.component';
import { InternaComponent } from './pages/soluciones/interna/interna.component';
import { VideoTipsComponent } from './pages/soluciones/video-tips/video-tips.component';
import { PerfilComponent } from './pages/user/perfil/perfil.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', component: PreHomeComponent },
  { path: 'constructores', component: ConstructorComponent },
  {
    path: 'capacitaciones',
    component: PublicComponent,
    children: [
      { path: 'cursos-online', component: CursosOnlineComponent},
      { path: ':token/:cursoid', component: ViewComponentComponent },
      { path: 'facebook-live', component: FacebookLiveComponent },
      { path: 'facebook-live-open', component: FacebookLiveOpenComponent },
      { path: '**', redirectTo: '' },
    ],
  },
  {
    path: 'soluciones_constructivas',
    component: PublicComponent,
    children: [
      { path: 'herramientas', component: HerramientasComponent },
      { path: 'calculadora', component: InternaComponent,canActivate: [AuthorizationGuard],canLoad:[AuthorizationGuard] },
      { path: 'video-tips', component: VideoTipsComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  {
    path: 'programa_especializacion',
    component: PublicComponent,
    children: [
      { path: 'certificacion', component: ProgramaProfesionalComponent },
      { path: 'estructura', component: ModulosComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: 'perfil', component: PerfilComponent ,canActivate: [AuthorizationGuard],canLoad:[AuthorizationGuard]},

  { path: '**', redirectTo: 'constructores' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  // providers: [
  //   { provide: LocationStrategy, useClass: PathLocationStrategy }
  // ]
})
export class AppRoutingModule {}
