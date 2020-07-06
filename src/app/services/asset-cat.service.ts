import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetCat } from '../models/asset-cat';

@Injectable({
  providedIn: 'root'
})
export class AssetCatService {
  baseUrl = 'https://rustlerwebapi.azurewebsites.net/';
  constructor(private http: HttpClient) { }

  GetAllCategories() {
    return this.http.get<AssetCat[]>(this.baseUrl + 'api/AssetCat', {responseType: 'json'});
  }

  GetCategoryById(id) {
    return this.http.get(this.baseUrl + 'api/AssetCat/' + id, {responseType: 'json'});
  }
}
