import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Bizcategory } from '../interfaces/bizcategory';
@Injectable({
  providedIn: 'root'
})
export class BizcategoryService {
baseUrl = 'https://rustlerwebapi.azurewebsites.net/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Bizcategory[]>(this.baseUrl + 'api/Category', {responseType: 'json'});
  }

  getCategory(id) {
    return this.http.get(this.baseUrl + 'api/Category/' + id);
  }
}
