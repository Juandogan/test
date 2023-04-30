import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Location } from '@angular/common';
import { Articulos } from 'src/app/models/articulos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit,OnDestroy {
  articulos:Articulos[]
  articulos2:any
  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) { }
   
   nota:any
   auxContador:number=0

  ngOnInit(): void {
      var height = document.getElementById("head").offsetHeight;
      document.getElementById("content").style.height = height  + 'px';
      console.log(height)
      window.scroll(0,0)
      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
      this.auxContador =  this.nota[0].vistas
      // this.sumarContador()
      this.pedirArticulos()
      })
      
    };


      pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
        // const resultPost =  [];
        this.crudService.getArticulos2().subscribe(res =>{
        this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
        this.articulos2 = this.articulos
        // for(const post of this.articulos){
        //      var aux = post?.categoria
        //   if (aux?.indexOf('revista'.toLowerCase()) > -1)
        //      {                  
        //    resultPost.push(post) 
        //    this.articulos = resultPost          
        //    }    
        //  }
         });//fin de subscribe
       } //




      subir(){
        window.scroll(0,0)
      }

      alerta(){
        alert('en contrucción')
      }

      saltos2(data:string){
        var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
   `)
         
   aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
   line-height: 30px;
   letter-spacing: 0px;
   font-size:22px;
   color:orange;
   margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)
      
  aux2 = aux2.split('<p').join(`<p style="
                                    font-weight: 400;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 28px;
                                    color:rgb(68, 68, 68);
                                    text-align:justify;  
                           text-justify:inter-character;
                                    "`)
                                                                            
                                          // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                          // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                          // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
                                          

                                          

                                          aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')
                                          
                                          aux2 = aux2.split('<strong>').join('<strong style="font-size:16px;line-height: 0px!important; ">')
                                          aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                          aux2 = aux2.split(' ,').join(', ')
                                          aux2 = aux2.split(' .').join('. ')
                                          aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                          aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px; margin-top:-20px; margin-bottom:30px;">')
                                          aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                          aux2 = aux2.split('<a ').join('<a target="_blank"')
                                          aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>')

                                          // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                          // aux2 = aux2.split('ng">').join('ng"></a>')
                                          // aux2 = aux2.split('pg">').join('pg"></a>')
                    
                                          
      // console.log('sa' + aux2)
      // console.log(aux2)
        return (aux2)
      
      
         };
   cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

 sumarContador(){
 
  //incrementa el contador
  this.crudService.unArticulo.contadorComentarios = this.nota[0]?.contadorComentarios
   this.crudService.unArticulo.correos = this.nota[0]?.correos
  this.crudService.unArticulo.comentarios = this.nota[0]?.comentarios
  this.crudService.unArticulo.vistas = this.auxContador + 1 
  this.crudService.unArticulo.imagen1 = this.nota[0]?.imagen1
  this.crudService.unArticulo.imagen2 = this.nota[0]?.imagen2
  this.crudService.unArticulo.imagen3 = this.nota[0]?.imagen3
  this.crudService.unArticulo.categoria = this.nota[0]?.categoria;
  this.crudService.unArticulo.fecha  =  this.nota[0]?.fecha;
  this.crudService.unArticulo.fechaMod  =  this.nota[0]?.fechaMod;
  this.crudService.unArticulo.autor = this.nota[0]?.autor
  this.crudService.unArticulo.fotografia = this.nota[0]?.fotografia
  this.crudService.unArticulo.edicionFotografia = this.nota[0]?.edicionFotografia
  this.crudService.unArticulo.nota = this.nota[0]?.nota
  this.crudService.unArticulo._id = this.nota[0]?._id
 this.crudService.unArticulo.categoria = this.nota[0]?.categoria
 this.crudService.unArticulo.titulo = this.nota[0]?.titulo
 this.crudService.unArticulo.tituloAlt = this.nota[0]?.tituloAlt
 this.crudService.unArticulo.subtitulo = this.nota[0]?.subtitulo
 
  this.crudService.unArticulo.posicion = this.nota[0]?.posicion
  this.crudService.unArticulo.art1 = this.nota[0]?.art1
  this.crudService.unArticulo.art2 = this.nota[0]?.art2
  this.crudService.unArticulo.art3 = this.nota[0]?.art3
  this.crudService.unArticulo.art4 = this.nota[0]?.art4
  this.crudService.unArticulo.art5 = this.nota[0]?.art5
  this.crudService.unArticulo.art6 = this.nota[0]?.art6
  this.crudService.unArticulo.art7 = this.nota[0]?.art7
  this.crudService.unArticulo.art8 = this.nota[0]?.art8
  this.crudService.unArticulo.art9 = this.nota[0]?.art9
  this.crudService.unArticulo.art10 = this.nota[0]?.art10
  this.crudService.unArticulo.art11 = this.nota[0]?.art11
  this.crudService.unArticulo.art12 = this.nota[0]?.art12


  this.crudService.unArticulo.fecha = this.nota[0]?.fecha

  this.crudService.unArticulo.resultadoCategoria = this.nota[0]?.resultadoCategoria 
  this.crudService.unArticulo.resultadoCategoria2 = this.nota[0]?.resultadoCategoria2
  this.crudService.unArticulo.resultadoCategoria3 = this.nota[0]?.resultadoCategoria3
  this.crudService.unArticulo.resultadoCategoria4 = this.nota[0]?.resultadoCategoria4
  this.crudService.unArticulo.resultadoCategoria5 = this.nota[0]?.resultadoCategoria5
  this.crudService.unArticulo.resultadoCategoria6 = this.nota[0]?.resultadoCategoria6
  this.crudService.unArticulo.resultadoCategoria7 = this.nota[0]?.resultadoCategoria7
  this.crudService.unArticulo.resultadoCategoria8 = this.nota[0]?.resultadoCategoria8
  this.crudService.unArticulo.resultadoCategoria9 = this.nota[0]?.resultadoCategoria9
  this.crudService.unArticulo.resultadoCategoria10 = this.nota[0]?.resultadoCategoria10
  this.crudService.unArticulo.resultadoCategoria11 = this.nota[0]?.resultadoCategoria11
  this.crudService.unArticulo.resultadoCategoria12 = this.nota[0]?.resultadoCategoria12



  this.crudService.unArticulo.resultadoImagen = this.nota[0]?.resultadoImagen
  this.crudService.unArticulo.resultadoImagen2 = this.nota[0]?.resultadoImagen2
  this.crudService.unArticulo.resultadoImagen3 = this.nota[0]?.resultadoImagen3
  this.crudService.unArticulo.resultadoImagen4 = this.nota[0]?.resultadoImagen4
  this.crudService.unArticulo.resultadoImagen5 = this.nota[0]?.resultadoImagen5
  this.crudService.unArticulo.resultadoImagen6 = this.nota[0]?.resultadoImagen6
  this.crudService.unArticulo.resultadoImagen7 = this.nota[0]?.resultadoImagen7
  this.crudService.unArticulo.resultadoImagen8 = this.nota[0]?.resultadoImagen8
  this.crudService.unArticulo.resultadoImagen9 = this.nota[0]?.resultadoImagen9
  this.crudService.unArticulo.resultadoImagen10 = this.nota[0]?.resultadoImagen10
  this.crudService.unArticulo.resultadoImagen11 = this.nota[0]?.resultadoImagen11
  this.crudService.unArticulo.resultadoImagen12 = this.nota[0]?.resultadoImagen12


  this.crudService.unArticulo.resultadoID = this.nota[0]?.resultadoID
  this.crudService.unArticulo.resultadoID2 = this.nota[0]?.resultadoID2
  this.crudService.unArticulo.resultadoID3 = this.nota[0]?.resultadoID3
  this.crudService.unArticulo.resultadoID4 = this.nota[0]?.resultadoID4
  this.crudService.unArticulo.resultadoID5 = this.nota[0]?.resultadoID5
  this.crudService.unArticulo.resultadoID6 = this.nota[0]?.resultadoID6
  this.crudService.unArticulo.resultadoID7 = this.nota[0]?.resultadoID7
  this.crudService.unArticulo.resultadoID8 = this.nota[0]?.resultadoID8
  this.crudService.unArticulo.resultadoID9 = this.nota[0]?.resultadoID9
  this.crudService.unArticulo.resultadoID10 = this.nota[0]?.resultadoID10
  this.crudService.unArticulo.resultadoID11 = this.nota[0]?.resultadoID11
  this.crudService.unArticulo.resultadoID12 = this.nota[0]?.resultadoID12





  

      // this.crudService.unProducto.fecha = String(this.fachaPublicacion)

    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => { console.log(res) })
        }
  

 

  

   ngOnDestroy(){

  
  window.scroll(0,0)

 
  }

};