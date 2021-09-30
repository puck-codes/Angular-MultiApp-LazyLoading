import { Component, OnInit } from '@angular/core';
import { Autorize } from 'corelib';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Autorize()
  onClick() { }

}
