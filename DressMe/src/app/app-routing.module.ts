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
import { HeaderComponent } from './componentes/comunes/header/header.component';
import { DetalleModalComponent } from './componentes/usuario/detalle-modal/detalle-modal.component';
import { LandinPageComponent } from './componentes/usuario/landin-page/landin-page.component';
import { AdminContabilidadComponent } from './componentes/admin/admin-contabilidad/admin-contabilidad.component';

const routes: Routes = [
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},

  {path: 'header',component: HeaderComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'catalogo',component: LandinPageComponent},
  {path: 'detalle',component: DetalleModalComponent},
  {path: 'agendar-turno',component: AgendarTurnoComponent},

  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'admin-turnos',component: AdminTurnosComponent},
  {path: 'admin-alquileres',component: AdminAlquileresComponent},
  {path: 'admin-catalogo',component: AdminCatalogoComponent},
  {path: 'admin-caja',component:AdminContabilidadComponent},
  {path: 'admin-cobrar',component:AdminCajaComponent},
  {path: 'admin-perfiles',component: AdminPerfilesComponent},
  
  {path: '**',redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
