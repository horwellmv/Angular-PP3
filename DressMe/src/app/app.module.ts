import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './componentes/usuario/catalogo/catalogo.component';
import { AgendarTurnoComponent } from './componentes/usuario/agendar-turno/agendar-turno.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { DashboardComponent } from './componentes/admin/dashboard/dashboard.component';
import { AdminTurnosComponent } from './componentes/admin/admin-turnos/admin-turnos.component';
import { AdminCatalogoComponent } from './componentes/admin/admin-catalogo/admin-catalogo.component';
import { AdminCajaComponent } from './componentes/admin/admin-caja/admin-caja.component';
import { AdminPerfilesComponent } from './componentes/admin/admin-perfiles/admin-perfiles.component';
import { AdminAlquileresComponent } from './componentes/admin/admin-alquileres/admin-alquileres.component';
import { NavbarComponent } from './componentes/comunes/navbar/navbar.component';
import { FooterComponent } from './componentes/comunes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    AgendarTurnoComponent,
    LoginComponent,
    DashboardComponent,
    AdminTurnosComponent,
    AdminCatalogoComponent,
    AdminCajaComponent,
    AdminPerfilesComponent,
    AdminAlquileresComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
