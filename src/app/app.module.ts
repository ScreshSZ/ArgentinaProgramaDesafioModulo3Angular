import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http'
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
