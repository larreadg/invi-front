import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactTopComponent } from './contact-top/contact-top.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { QueIncluyeComponent } from './que-incluye/que-incluye.component';
import { ExtrasComponent } from './extras/extras.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactTopComponent,
    InicioComponent,
    CatalogoComponent,
    QueIncluyeComponent,
    ExtrasComponent,
    CaracteristicasComponent,
    ContactoComponent,
    SidebarComponent
  ],
  imports: [
    // PrimeNG
    CarouselModule,
    SidebarModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
