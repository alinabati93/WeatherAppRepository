import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/City';
import { WeatherService } from 'src/app/Service/weather.service';

@Component({
  selector: 'app-weather-add-city',
  templateUrl: './weather-add-city.component.html',
  styleUrls: ['./weather-add-city.component.css']
})
export class WeatherAddCityComponent implements OnInit {
  cityName="";
  constructor(private wService:WeatherService) { }

  async addNewCity(){
    let city:City={Name:this.cityName,IsLoading:false};
    await this.wService.AddNewCity(city);
    this.cityName="";
  }

  ngOnInit(): void {
  }

}
