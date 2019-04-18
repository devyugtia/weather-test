import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() result: any[];
  @Input() weather_data: any[];
  @Input() isSearch: boolean;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  showDetails(woeid: string) {
    if (this.weather_data.length == 0) {
      this.router.navigateByUrl('weather/' + woeid);
    }
  }

}
