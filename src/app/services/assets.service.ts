import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assets } from '../models/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  baseUrl = 'https://rustlerwebapi.azurewebsites.net/';
  constructor(private http: HttpClient) { }

  getItemsByCategory(categoryId) {
    return this.http.get<Assets[]>(this.baseUrl + `api/Asset?categoryId=${categoryId}`, {responseType: 'json'});
  }

  getAssetById(id) {
    return this.http.get<Assets>(this.baseUrl + 'api/Asset/' + id, {responseType: 'json'});
  }
}
