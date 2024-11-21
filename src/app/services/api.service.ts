import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = environment.apiKey;
  private apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getData(countryCode: string) {
    return this.http.get(`${this.apiEndpoint}/en/country/${countryCode}?format=json&apiKey=${this.apiKey}`);
  }
}