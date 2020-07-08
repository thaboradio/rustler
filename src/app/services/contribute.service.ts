import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
baseUrl = 'https://mailthis.to/thbradiopane@gmail.com';
  constructor(private http: HttpClient) { }

  sendMessage(input: any) {
    return this.http.post(this.baseUrl, input, {responseType: 'text'}).pipe(
      map(
        (res) => {
          if (res) {
            return res;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
