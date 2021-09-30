import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  click(){
    this.ingredientService.getAll().subscribe((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err);
    })
  }

}
