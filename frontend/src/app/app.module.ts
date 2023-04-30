import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ANavBarComponent } from './componentes/a-nav-bar/a-nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//SERVICIOS
import { CrudService } from './services/crud.service';
import { ResolveNotaService } from './services/resolve-nota.service';

//ANGULAR MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { APortadaComponent } from './componentes/a-portada/a-portada.component';
import { BIndiceComponent } from './componentes/b-indice/b-indice.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { SanetizerPipe } from './pipes/sanetizer.pipe';

import { HttpClientModule } from '@angular/common/http';
import { SuscripcionComponent } from './componentes/suscripcion/suscripcion.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterCardComponent } from './componentes/footer-card/footer-card.component';
import { GestorComponent } from './componentes/gestor/gestor.component';
import { QuienSomosComponent } from './componentes/quien-somos/quien-somos.component';
import { AdmComponent } from './componentes/adm/adm.component';
import { FiltroRevistaPipe } from './pipes/filtro-revista.pipe';
import { ArticuloRelacionadoComponent } from './componentes/articulo-relacionado/articulo-relacionado.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { LateralRelacionadoComponent } from './componentes/lateral-relacionado/lateral-relacionado.component';
import { Carousel2Component } from './componentes/carousel2/carousel2.component';
import { CkeditorComponent } from './componentes/ckeditor/ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Main2Component } from './componentes/main2/main2.component';
import { PosicionesPipe } from './pipes/posiciones.pipe';
import { Filtrox10Pipe } from './pipes/filtrox10.pipe';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { Indice2Component } from './componentes/indice2/indice2.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselRevistaComponent } from './componentes/carousel-revista/carousel-revista.component';
import { CarouselCategoriasComponent } from './componentes/carousel-categorias/carousel-categorias.component';



@NgModule({
  declarations: [
    AppComponent,
    ANavBarComponent,
    APortadaComponent,
    BIndiceComponent,
    ArticuloComponent,
    SanetizerPipe,
    SuscripcionComponent,
    MainComponent,
    FooterCardComponent,
    GestorComponent,
    QuienSomosComponent,
    AdmComponent,
    FiltroRevistaPipe,
    ArticuloRelacionadoComponent,
    CarouselComponent,
    LateralRelacionadoComponent,
    Carousel2Component,
    CkeditorComponent,
    Main2Component,
    PosicionesPipe,
    Filtrox10Pipe,
    ComentariosComponent,
    Indice2Component,
    CarouselRevistaComponent,
    CarouselCategoriasComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    CKEditorModule,
    FormsModule,
    NgxUsefulSwiperModule




  ],
  providers: [CrudService, ResolveNotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
