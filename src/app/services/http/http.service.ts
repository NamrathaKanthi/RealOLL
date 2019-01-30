import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_API_BASE_URL } from '../../../environments/environment';
import { JSON_BASE_URL } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  getData(url: string) {
    url = REST_API_BASE_URL + url;
    return this.http.get(url);
  }

  getJson() {
    const url = JSON_BASE_URL;
    return this.http.get(url);
  }
}
