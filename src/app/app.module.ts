import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CorelibModule } from 'corelib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorelibModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
