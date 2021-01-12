import { Component } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscarheroeComponent } from './Components/buscarheroe/buscarheroe.component';


const App_ROUTES : Routes=[
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'heroes', component:HeroesComponent},
    {path: 'heroe/:id', component:HeroeComponent},
    {path: 'buscarheroe/:bus', component:BuscarheroeComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'}
    
];

export const App_Routing = RouterModule.forRoot(App_ROUTES, {useHash:true});