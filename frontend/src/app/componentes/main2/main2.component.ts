import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit,  OnDestroy {
 
 
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
  loading = true;
public color = "rgb(33,33,33)"

articulos: any
nota:any
loader= true;
editorial = "";
numeroEdicion =0;
anio ="2022"
  constructor(public crudService:CrudService, private ruta:ActivatedRoute) { }
 

  ngOnInit(): void {
     this.ruta.data.subscribe((data)=>{
     this.nota = Object.entries(data).map(i => i[1]);
    this.editorial = this.nota[0]?.autor
       console.log(this.nota,'llega por link')
       this.loading = false
       this.articulos = this.nota
       

       

       if(this.articulos[0]._id === "629e7b966c66ee10cd73a4a3"){
        this.numeroEdicion = 139 
        this.anio ="2022" 
      
      } 

       if(this.articulos[0]._id === "62c227e05b460b1532204eaf"){
         this.numeroEdicion = 140 
         this.anio ="2022" 
        } 

         if(this.articulos[0]?._id == "62f04fa687a2613db6b2238f"){
          this.numeroEdicion = 141
          this.anio ="2022" 
                                }   
        
        if(this.articulos[0]?._id === "6312a3d8beb93c380ef95ef6"){
          this.numeroEdicion = 142  
          this.anio ="2022"                      
        } 
        
        if(this.articulos[0]?._id === "633e1ad041678f4c7488fc34"){
          this.numeroEdicion = 143   
          this.anio ="2022"                     
        } 
        if(this.articulos[0]?._id === "6368765d41678f4c74893535"){
          this.numeroEdicion = 144   
          this.anio ="2022"                     
        } 
        if(this.articulos[0]?._id === "638e98e81043d2136d64bdbe"){
          this.numeroEdicion = 145                      
          this.anio ="2022" 
        } 
        if(this.articulos[0]?._id === "63af15591043d2136d64eda8"){
          this.numeroEdicion = 146              
          this.anio ="2023"        
        }
        if(this.articulos[0]?._id === "63df0ad31043d2136d653d7a"){
          this.numeroEdicion = 147              
          this.anio ="2023"        
        }

        if(this.articulos[0]?._id === "64008f81c8818a12ad604fad"){
          this.numeroEdicion = 148     
          this.anio ="2023"        
        }

        if(this.articulos[0]?._id === "64008f81c8818a12ad604fad"){
          this.numeroEdicion = 148     
          this.anio ="2023"        
        }
        
        if(this.articulos[0]?._id === "642f1a14c8818a12ad60b471"){
          this.numeroEdicion = 149     
          this.anio ="2023"        
        }


        
      //  else{
        
      //   console.log(this.articulos[0].)
      //   this.numeroEdicion = 139}

       

       
     })

      // this.pedirArticulos()
  }


  pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    const resultPost =  [];
    this.crudService.getArticulos().subscribe(res =>{
    this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
console.log(res)
    for(const post of this.articulos){
      var aux = post?.categoria
      if (aux?.indexOf('revista'.toLowerCase()) > -1)
      {
       
        
        resultPost.push(post) 
      this.articulos = resultPost
     console.log(this.articulos,"esto es main 1")

  

     }
     
     
     

    }
     this.loading = false
    window.scroll(0,0)

       
  
  
      });//fin de subscribe
    } //fin de pedirProductosthis.

    saltos2(data:string){
      var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
line-height: 32px;
letter-spacing: -1px;
font-size:22px!important;
color:white;
margin-bottom:15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
 `)
       
 aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
 line-height: 30px;
 letter-spacing: 0px;
 font-size:22px;
 color:white;
 margin-bottom:10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)
    
                                    
                                        // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                        // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                        // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
                                        

                                        

                                        aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')
                                        
                                       
                                        aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                        aux2 = aux2.split(' ,').join(', ')
                                        aux2 = aux2.split(' .').join('. ')
                                        aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                        aux2 = aux2.split('<h4>').join('<h4 style="text-align:center; font-size:15px; margin-top:-20px; margin-bottom:30px;">')
                                        aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                        aux2 = aux2.split('<a ').join('<a target="_blank"')
                                        // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                        // aux2 = aux2.split('ng">').join('ng"></a>')
                                        // aux2 = aux2.split('pg">').join('pg"></a>')
                  
                                        
    // console.log('sa' + aux2)
 
      return (aux2)
    
    
       };



  

    ngOnDestroy() {
      window.scroll(0,0)
    }

}
