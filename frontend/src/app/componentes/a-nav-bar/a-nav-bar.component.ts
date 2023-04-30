import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';
 
// import { BuscadorObservableService } from 'src/app/service/buscador-observable.service';
// import { LoadingObservableService } from 'src/app/service/loading-observable.service';


@Component({
  selector: 'app-a-nav-bar',
  templateUrl: './a-nav-bar.component.html',
  styleUrls: ['./a-nav-bar.component.css']
})
export class ANavBarComponent implements OnInit {
  
  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
public color = "rgb(33,33,33)"

articulos: Articulos[] = [];

loader= true;


  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    this.pedirArticulos()
  }


  pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    this.crudService.getArticulos().subscribe(res =>{
    this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
 
  
  
      });//fin de subscribe
    } //fin de pedirProductos


}
