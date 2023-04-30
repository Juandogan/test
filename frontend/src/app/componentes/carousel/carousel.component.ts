import { Component, OnInit, Input } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { Carousel } from '../../models/carousel';
import { carouselDataItems } from '../../models/dataCarousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */

  @Input('altura') height:any ;
  @Input() isFullScreen = false;
  @Input() items: Carousel[]= []
  @Input('data') data : any ;

  

 
  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit() {
  this.items = carouselDataItems

    this.items.map( ( i, index:any ) => {
      i.id = index;
      i.marginLeft = 0;
     

    });
    
    // for(let i = 1; i < this.items.length + 1 ; ++i){
 
    //   let segundos = i * 8000
    //   setTimeout(() => {this.setNext()}, segundos); 
  

    // }

    

  }

  cronometro(){
    setTimeout(() => this.setNext(), 2000);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -20 * position;
  }



  setNext() {
     
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    // if (nextPosition <= this.items.length - 16) {
      if (nextPosition <= 12) {
      finalPercentage = -20 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -14 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -12 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }

}