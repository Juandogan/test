import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Articulos } from '../../models/articulos';
@Component({
  selector: 'app-articulo-relacionado',
  templateUrl: './articulo-relacionado.component.html',
  styleUrls: ['./articulo-relacionado.component.css']
})
export class ArticuloRelacionadoComponent implements OnInit {
  
  
  articulos: Articulos[] = []
  
  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log("este es el posta", this.nota)

  }


  cut(value:any){
    if(value){
    var corte = value.slice(2)
    return corte
  }else

 return value;

  
}; 

}
