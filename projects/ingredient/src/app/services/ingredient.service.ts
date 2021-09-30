import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autorize } from 'corelib';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private httpClient: HttpClient) { }
  @Autorize()
  getAll() {
    return this.httpClient.get('/no_voy_a_dormir');
  }
}
