import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { App_Routing } from './app.routes';
//Servicios
import { HeroesService } from './Services/heroes.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscarheroeComponent } from './Components/buscarheroe/buscarheroe.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarheroeComponent,
    HeroeTarjetaComponent
    
  ],
  imports: [
    BrowserModule,
    App_Routing
  ],
  providers: [
    HeroesService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
