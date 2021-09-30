import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routesRoot: Routes = [
  {
    path: 'ingredients/service',
    loadChildren: () => import('./ingredient/ingredient.module')
      .then(module => module.IngredientModule)
  }
];

const routesChild: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'service',
    loadChildren: () => import('./ingredient/ingredient.module')
      .then(module => module.IngredientModule)
  }
];

// Para el proyecto Ingredients
@NgModule({
  imports: [RouterModule.forChild(routesChild)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }

// Para el proyecto App
@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
