import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weoid: string;

  weather_data: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.weoid = this.route.snapshot.paramMap.get("woeid")
    console.log('In weather Details :: ', this.weoid);
    this.getWeatherData(this.weoid);
  }

  getWeatherData(woeid: string) {
    this.api.getWeatherDetails(woeid).subscribe((data) => {
      console.log('Data :: ', data);
      this.weather_data = data;
    }, (err) => {
      console.log('Error :: ', err);
    });
  }

}
