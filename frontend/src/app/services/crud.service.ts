import { Injectable } from '@angular/core';
import { Articulos } from '../models/articulos';
import { HttpClient } from '@angular/common/http';


import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarConfig} from '@angular/material/snack-bar';
 
//import * as moment from 'moment'
//import { of } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  readonly URL_API  = "http://168.197.50.191/articulos";
  readonly URL_API2  = "http://168.197.50.191/adm";
  // readonly URL_APIx  = "http://localhost:3000/articulos";
  // readonly URL_API2 = "http://localhost:3000/adm";
  
  cambioPantalla = true;
  Articulos:Articulos[]=[];
  unArticulo:Articulos
  loading=true;
  
  
  constructor(private http:HttpClient,  private location:Location, private snackBar:MatSnackBar) {
    let config = new MatSnackBarConfig();
    config.panelClass = 'text-align:center';
    this.unArticulo = new Articulos();


  }

  

  cancel():void {
    this.location.back(); // <-- go back to previous location on cancel
    }


  //CRUD  
   uploadFile(formData:any){
  console.log('Bandera por aca pasa NM', formData)
  
   return this.http.post('http://168.197.50.191/upload' , formData)   // en produccion poner '/upload' por this.URL_API2

    }


  getArticulos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);

  };

  

  getArticulos2() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API2);

  };

   getOneArticulo(_id:any){
    return this.http.get(this.URL_API + `/${_id}`);
  };

  addArticulo(articulo:Articulos) {
    
    return this.http.post(this.URL_API, articulo);
    

  };

  modificarArticulo(articulo:Articulos) {
    console.log(articulo, 'antes de modificar')
    return this.http.put(this.URL_API + `/${articulo._id}` , articulo);

  };

  deleteArticulo(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };

  cut(value:any){
    var corte = value.slice(8)

   return corte
 };




 snack(value:any){

  this.snackBar.open(value,'',{duration:2000, horizontalPosition:'center', verticalPosition:'bottom',   panelClass: ['blue-snackbar']})


}

 };




  // uploadFile(formData){
  //   return this.http.post(this.URL_API2, formData)
  //   // se deja solo '/upload' en produccion

  // }



//FIN DE CLASE GENERAL
