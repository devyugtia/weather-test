import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

/**
 * Define routes
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:keyword',
    component: HomeComponent
  },
  {
    path: 'weather/:woeid',
    component: WeatherDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
