import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
