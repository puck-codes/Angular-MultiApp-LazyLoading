import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CorelibModule } from 'corelib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INTERCEPTORS } from 'corelib';
import { HttpClientModule } from '@angular/common/http';
import { IngredientComponent } from './ingredient/ingredient.component';

const providers = [...INTERCEPTORS]

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorelibModule,
    HttpClientModule,
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({
 })
export class IngredientSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule, 
      providers: providers
    }
  }
}
