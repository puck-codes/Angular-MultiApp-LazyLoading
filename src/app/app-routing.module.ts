import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';


const routes: Routes = [
  {
    path: '', component: PizzasComponent
  },
  {
    path: 'ingredients',
    loadChildren: () => import('../../projects/ingredient/src/app/app.module')
      .then(module => module.IngredientSharedModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
