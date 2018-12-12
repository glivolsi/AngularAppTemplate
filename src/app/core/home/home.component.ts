import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.arrow-up {width: 0; eight: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid orange;position:absolute ;top:-13px; left:5px}',
    '.top-border {border-top:3px solid orange; border-radius:0 0}']

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
