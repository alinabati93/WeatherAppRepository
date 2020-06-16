import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Service/weather.service';
import { City } from 'src/app/model/City';

@Component({
  selector: 'app-weather-city-list',
  templateUrl: './weather-city-list.component.html',
  styleUrls: ['./weather-city-list.component.css']
})
export class WeatherCityListComponent implements OnInit {

  cities:City[];

  constructor(private wService:WeatherService) {
    this.cities=wService.Cities;
    //this.cities=wService.GetSavedCities();
  }

  ngOnInit(): void {
  }

}
