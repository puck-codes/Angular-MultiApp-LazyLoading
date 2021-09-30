import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Service } from './services/service,';



@NgModule({
  declarations: [
  ],
  imports: [
    
  ],

})
export class CorelibModule { 
  constructor(service:Service){
    Service.data = true;
  }
}
