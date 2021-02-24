import { Component, OnInit ,OnChanges} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherdataService } from "./weatherdata.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges{

  // @ts-ignore
  public weatherSearchForm: FormGroup;
  public weathersCity:any;
  public weatherForecastData: any;
  public errorMessage:any;
  public defaultCity: string | undefined;

  constructor(private location: Location,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private ws:WeatherdataService,private router:Router) {
    this.defaultCity = "London";
    this.ws.getWeatheritemsbyCity("London")
      .subscribe(data => {
        this.weatherForecastData = data;
        console.log(this.weatherForecastData);
      });



  }

  ngOnInit(): void {
    this.ws.getWeatheritemsbyCity("London")
      .subscribe(data => {
        this.weatherForecastData = data;
        console.log(this.weatherForecastData);
      });
    this.defaultCity= "London";
    this.weathersCity=this.ws.getWeatherItems();
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

  }
  sendToAPI(e:any){
    this.router.navigate(['/']);
    console.log(e.target.value);
    console.log(e.target.value);
    this.ws.getWeatheritemsbyCity(e.target.value)
      .subscribe(data => { this.weatherForecastData = data }, error => this.errorMessage = <any>error);
    console.log(this.weatherForecastData);

  }

  getForeCast(cityName:any){

      this.router.navigate(['/weather', cityName]);
  }
  ngOnChanges(): void {

  }

}
