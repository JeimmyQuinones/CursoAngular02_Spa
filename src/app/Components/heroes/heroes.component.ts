import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../Services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor( private _heroesservece:HeroesService,
    private router:Router ) 
  {

  }
  
  ngOnInit(): void {
  this.heroes=this._heroesservece.getHeroes();
  console.log(this.heroes);
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
