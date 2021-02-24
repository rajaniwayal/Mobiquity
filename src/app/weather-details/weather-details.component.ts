import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {WeatherdataService} from "../weather/weatherdata.service";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit,OnDestroy {
  public city: string|undefined;
  public weatherForecastData: any;
  private sub: any;
  constructor(private route: ActivatedRoute,private ws:WeatherdataService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.city = params['city'];
    });
    console.log("details"+this.city)
    if(this.city!=undefined)
    this.ws.getWeatherForecast(this.city)
      .subscribe(data => {
        this.weatherForecastData = data.list;
        console.log(this.weatherForecastData);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
