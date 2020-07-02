import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBusiness } from '../models/ibusiness';
@Injectable({
  providedIn: 'root'
})
export class BizdireService {
baseUrl = 'https://rustlerwebapi.azurewebsites.net/';
localUrl = 'http://localhost:55691/';
httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

  constructor(private http: HttpClient) { }


  getAllBusinesses() {
    return this.http.get<IBusiness[]>(this.baseUrl + 'api/Business');
  }

addNewBusiness(fileToUpload: File, business: IBusiness) {
  const formData: FormData = new FormData();
  formData.append('Logo', fileToUpload, fileToUpload.name);
  formData.append('Name', business.Name);
  formData.append('Description', business.Description);
  formData.append('Category', business.Category.toString());
  formData.append('PhoneNumber', business.PhoneNumber);
  formData.append('AlternativePhone', business.AlternativePhoneNumber);
  formData.append('EmailAddress', business.EmailAddress);
  formData.append('Website', business.Website);
  formData.append('FacebookLink', business.FacebookLink);
  formData.append('TwitterLink', business.TwitterLink);
  return this.http.post(this.baseUrl + 'api/Business', formData);
}

}




