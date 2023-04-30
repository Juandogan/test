import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scroll(val:any){
    window.scroll(0,val)
  }
}
