import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() item:any={} ;
  @Input() idex:number ;

  @Output()heroeseleccionado: EventEmitter<number>;
  constructor( private router:Router) { 
    this.heroeseleccionado= new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe(){
    this.heroeseleccionado.emit(this.idex);
    //this.router.navigate(['/heroe',this.idex]);
  }

}
