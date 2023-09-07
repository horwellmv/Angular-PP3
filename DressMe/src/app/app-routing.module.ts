import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/usuario/catalogo/catalogo.component';
import { AgendarTurnoComponent } from './componentes/usuario/agendar-turno/agendar-turno.component';
import { AdminAlquileresComponent } from './componentes/admin/admin-alquileres/admin-alquileres.component';
import { AdminCajaComponent } from './componentes/admin/admin-caja/admin-caja.component';
import { AdminCatalogoComponent } from './componentes/admin/admin-catalogo/admin-catalogo.component';
import { AdminPerfilesComponent } from './componentes/admin/admin-perfiles/admin-perfiles.component';
import { AdminTurnosComponent } from './componentes/admin/admin-turnos/admin-turnos.component';
import { DashboardComponent } from './componentes/admin/dashboard/dashboard.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { FooterComponent } from './componentes/comunes/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
  {path: 'catalogo',component: CatalogoComponent},
  {path: 'agendar-turno',component: AgendarTurnoComponent},
  {path: 'admin-alquileres',component: AdminAlquileresComponent},
  {path: 'login',component: LoginComponent},
  {path: 'admin-caja',component: AdminCajaComponent},
  {path: 'footer',component: FooterComponent},
  /*{path: 'footerf',component: FooterComponentg},*/
  {path: 'admin-catalogo',component: AdminCatalogoComponent},
  {path: 'admin-perfiles',component: AdminPerfilesComponent},
  {path: 'admin-turnos',component: AdminTurnosComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: '**',redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
