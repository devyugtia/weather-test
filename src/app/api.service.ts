import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // change the url for access weather.php
  baseUrl = 'http://192.168.1.149/weather/weather.php';

  constructor(private http: HttpClient) {
  }

  search(keyword: string) {
    return this.http.get(this.baseUrl + '?command=search&keyword=' + keyword);
  }

  getWeatherDetails(woeid: string) {
    return this.http.get(this.baseUrl + '?command=location&woeid=' + woeid);
  }
}
