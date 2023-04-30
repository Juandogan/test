import { Component, OnInit, Input } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';

import { Carousel } from '../../models/carousel';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 400;
  @Input() isFullScreen = false;
  @Input() items: Articulos[] = [];
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
    
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;

    });
  
    
    for(let i = 1; i < this.data.length + 1 ; ++i){
 
      let segundos = i * 8000
      setTimeout(() => {this.setNext()}, segundos); 
  

    }

    

  }

  cronometro(){
    setTimeout(() => this.setNext(), 2000);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    // this.items.find(i => i.id === 0).marginLeft 
    this.items[0].marginLeft = -50 * position; 
    
  
  }



  setNext() {

     
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    // this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.items[0].marginLeft = finalPercentage;
    
  

    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items[0].marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }

}