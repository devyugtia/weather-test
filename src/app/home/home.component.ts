import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyword: string;
  navigationSubscription;
  defaultCities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
  result = [];
  weather_data = [];
  isLoading: boolean;
  isSearch: boolean;

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.loadSearchResult();
      }
    });
  }

  ngOnInit() {
    if (this.router.url == '/') {
      this.isSearch = false;
      this.loadhomeData();
    }
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  search() {
    if (this.keyword.length) {
      this.router.navigateByUrl('search/' + this.keyword);
    }
  }

  loadSearchResult() {
    this.isSearch = true;
    this.isLoading = true;
    this.keyword = this.route.snapshot.paramMap.get("keyword");
    console.log('In weather :: ', this.keyword);
    console.log('In weather :: ', this.router.url);
    this.result.splice(0, this.result.length);
    this.weather_data.splice(0, this.weather_data.length);
    this.getWeatherDetails(this.keyword).then((data: any) => {
      this.isLoading = false;
      if (data.length) {
        data.forEach(element => {
          this.result.push(element);
          // this.getWeatherData(element.woeid).then((weatherData) => {
          //   this.weather_data.push(weatherData);
          // });
        });
      }
    });
  }

  loadhomeData() {
    this.isLoading = true;
    this.defaultCities.forEach(element => {
      this.getWeatherDetails(element).then((data) => {
        this.isLoading = false;
        this.result.push(data[0]);
        this.getWeatherData(data[0].woeid).then((weatherData) => {
          this.weather_data.push(weatherData);
        });
      });
    });
  }

  getWeatherDetails(keyword: string) {
    return new Promise((resolve, reject) => {
      this.api.search(keyword).subscribe((data) => {
        console.log('Data :: ', data);
        resolve(data);
      }, (err) => {
        reject(err);
        console.log('Error :: ', err);
      });
    });
  }

  getWeatherData(woeid: string) {
    return new Promise((resolve, reject) => {
      this.api.getWeatherDetails(woeid).subscribe((data) => {
        console.log('Data :: ', data);
        resolve(data);
      }, (err) => {
        console.log('Error :: ', err);
        reject(err);
      });
    });
  }

}
