import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService } from "./weather/weatherdata.service";
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
