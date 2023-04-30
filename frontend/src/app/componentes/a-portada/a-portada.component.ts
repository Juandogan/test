import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-a-portada',
  templateUrl: './a-portada.component.html',
  styleUrls: ['./a-portada.component.css']
})
export class APortadaComponent implements OnInit {
  @Input('nro') nro : any ;
  @Input('data') data : any ;
 numero=0
 link=""
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
   this.numero = this.nro + 137
   this.link = this.data.imagen1
  }

  cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

hola(){
  this.crudService.snack('')
}


}
