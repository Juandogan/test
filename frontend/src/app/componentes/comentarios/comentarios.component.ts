import { Component, OnInit,Input } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';
import moment from 'moment';
 


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentario =""
  nombre =""
  email = ""
  articulos: Articulos[] = [] 
  formulario = false
  btnComentar = true
  mensaje = false

  loading = false

  @Input('data') nota : any ;

  comentarios:any
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log(this.nota)
   
    var aux = this.nota.comentarios
    if( aux  ){
      this.comentarios = aux.split("<hr>").reverse()
      console.log(this.comentarios,'dale')
    } else {
      
      this.comentarios = []
    }



  }


  enviar(){   const hoy = Date.now(); 
 
 var post =   moment(hoy).format("YYYY-MM-DD hh:mm") + ' ' + this.nombre  + ': ' + this.comentario
console.log(post)

  }


 
  agregarPublicacion(){ 
    if(this.nombre ==="" || this.comentario === "" || this.email === "" ){
       this.crudService.snack('Faltan datos')
       
   return
    }
else{
this.formulario=false;

const hoy = Date.now(); 
if(this.nota.comentarios === undefined || this.nota.comentarios ===null){
  var post = moment(hoy).format("DD/MM/YY hh:mm") + ' ' +'<b>'+ this.nombre  +'</b>'+ ': ' + '<br>' + this.comentario + '<hr>'
} else {
var post =  this.nota.comentarios + '<div>' + moment(hoy).format("DD/MM/YY hh:mm") + '</div>' + ' ' + '<b>'+ this.nombre  +'</b>'+ ': ' + '<br>'
 + this.comentario + '<hr>'

 
}
  


        if( this.crudService.unArticulo?._id)
      {   
          this.nota.correos = this.nota.correos + this.email + " - " 
     

           this.nota.comentarios = post    
          this.nota.contadorComentarios = 'Nuevo' 
          //this.nota.comentarios =""  //borrar comentarios
           this.loading = true
           
            this.crudService.modificarArticulo(this.nota).subscribe(res =>
               { this.comentario = "" ;this.nombre =""; this.email=""              
                  this.comentario = this.nota
                  this.loading = false
                  this.crudService.snack('Mensaje enviado')
                  var aux = this.nota.comentarios
                  if( aux  ){
                    this.comentarios = aux.split("<hr>").reverse()
                    console.log(this.comentarios,'dale')
                    this.comentario = ""
                  } else {
                    
                    return
                  }
              
              
                });
                    
        
               // this.reload()
     
    }
      else  {
        
console.log(this.crudService.unArticulo)

//this.nota.comentarios =""  borrar comentarios
this.loading = true
this.nota.comentarios = post    
this.nota.contadorComentarios = 'Nuevo' 
this.nota.correos = this.email + " - " 
        this.crudService.addArticulo(this.nota)

        .subscribe(res => { this.comentario = "" ;this.nombre =""; 
  this.formulario=false;
  this.crudService.snack('Mensaje enviado')
  this.loading = false
  var aux = this.nota.comentarios
  if( aux  ){
    this.comentarios = aux.split("<hr>").reverse()
 
  } else {
    
    this.comentarios = []
  }


        
        // this.reload()
          })
    }
    
    };
  }

}

