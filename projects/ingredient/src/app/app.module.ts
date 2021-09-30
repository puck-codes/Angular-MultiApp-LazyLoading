import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CorelibModule } from 'corelib';
import { ChildRoutingModule, RootRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    CorelibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



@NgModule({
  imports: [
    ChildRoutingModule,
  ],
})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}