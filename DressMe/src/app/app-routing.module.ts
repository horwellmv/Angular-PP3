import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';


//imports no usados
import { CatalogoComponent } from './componentes/usuario/catalogo/catalogo.component';
import { FooterComponent } from './componentes/comunes/footer/footer.component';
import { HeaderComponent } from './componentes/comunes/header/header.component';
//imports usados
import { AgendarTurnoComponent } from './componentes/usuario/agendar-turno/agendar-turno.component';
import { AdminAlquileresComponent } from './componentes/admin/admin-alquileres/admin-alquileres.component';
import { AdminCajaComponent } from './componentes/admin/admin-caja/admin-caja.component';
import { AdminCatalogoComponent } from './componentes/admin/admin-catalogo/admin-catalogo.component';
import { AdminPerfilesComponent } from './componentes/admin/admin-perfiles/admin-perfiles.component';
import { AdminTurnosComponent } from './componentes/admin/admin-turnos/admin-turnos.component';
import { DashboardComponent } from './componentes/admin/dashboard/dashboard.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { DetalleModalComponent } from './componentes/usuario/detalle-modal/detalle-modal.component';
import { LandinPageComponent } from './componentes/usuario/landin-page/landin-page.component';
import { AdminContabilidadComponent } from './componentes/admin/admin-contabilidad/admin-contabilidad.component';

// Constantes del Guardian de rutas
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']); // Sin credenciales redirige al Login
const redirectLoggedInToItems = () => redirectLoggedInTo(['/dashboard']);     // Con credenciales redirige al dashboard

const routes: Routes = [
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},

  //{path: 'header',component: HeaderComponent},
  //{path: 'footer',component: FooterComponent},
  {path: 'catalogo',component: LandinPageComponent,             canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: 'detalle',component: DetalleModalComponent,            canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: 'agendar-turno',component: AgendarTurnoComponent,      canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: 'login',component: LoginComponent,                     canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},

  {path: 'dashboard',component: DashboardComponent,             canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-turnos',component: AdminTurnosComponent,        canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-alquileres',component: AdminAlquileresComponent,canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-catalogo',component: AdminCatalogoComponent,    canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-caja',component:AdminContabilidadComponent,     canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-cobrar',component:AdminCajaComponent,           canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'admin-perfiles',component: AdminPerfilesComponent,    canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  
  {path: '**',redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
