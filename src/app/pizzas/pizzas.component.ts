import { Component, OnInit } from '@angular/core';
import { Autorize } from 'corelib';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent  {

  constructor() { }


  @Autorize()
  click(){

  }

}
