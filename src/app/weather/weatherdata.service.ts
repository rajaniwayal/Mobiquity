import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_LIST } from './weather.data';

import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  getWeatherItems() {
    return WEATHER_LIST;
  }

  getWeatheritemsbyCity(cityName: string) {
    return this.http.get(
      environment.baseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }



}
