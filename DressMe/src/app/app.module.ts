// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


// MODULOS FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/compat';

// COMPONENTES
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
import { HeaderComponent } from './componentes/comunes/header/header.component';
import { DetalleModalComponent } from './componentes/usuario/detalle-modal/detalle-modal.component';
import { LandinPageComponent } from './componentes/usuario/landin-page/landin-page.component';
import { AdminContabilidadComponent } from './componentes/admin/admin-contabilidad/admin-contabilidad.component';


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
    FooterComponent,
    HeaderComponent,
    DetalleModalComponent,
    LandinPageComponent,
    AdminContabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    //Soluciona problema de inyeccion de dependencia nula de firebase
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
