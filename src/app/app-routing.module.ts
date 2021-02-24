import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";
import {WeatherDetailsComponent} from "./weather-details/weather-details.component";

const routes: Routes = [
  { path: '', component: WeatherComponent ,children:[
      {
      path: 'weather/:city', component: WeatherDetailsComponent
      }]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
