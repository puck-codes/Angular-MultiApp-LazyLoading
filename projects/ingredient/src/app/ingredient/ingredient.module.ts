import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';

@NgModule({
  declarations: [
    IngredientComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
