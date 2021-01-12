import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Heroe, HeroesService } from '../../Services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
 heroe:Heroe;
  constructor( private activateroute: ActivatedRoute,
    private _heroeservice:HeroesService) {
    this.activateroute.params.subscribe(params=> {
      this.heroe=this._heroeservice.getHeroe(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
