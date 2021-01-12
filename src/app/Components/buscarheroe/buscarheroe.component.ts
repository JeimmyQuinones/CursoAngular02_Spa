import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Heroe, HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styleUrls: ['./buscarheroe.component.css']
})
export class BuscarheroeComponent implements OnInit {
  heroes:Heroe[];
  termino:string;
  constructor( private activateroute: ActivatedRoute,
    private _heroeservice:HeroesService,
    private router:Router) {
    
   }

  ngOnInit(): void {
    this.activateroute.params.subscribe(params=> {
      this.heroes=this._heroeservice.BuscarHero(params['bus']);
      this.termino= params['bus'];
      console.log(this.heroes);
    })

  }
    verHeroe(idx:number){
      this.router.navigate(['/heroe',idx]);
    }
  
}
