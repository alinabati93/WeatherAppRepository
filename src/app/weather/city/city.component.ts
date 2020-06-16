import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/model/City';
import { WeatherService } from 'src/app/Service/weather.service';
import { WeatherData } from 'src/app/model/weather-data';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() city: City;

  constructor(private wService: WeatherService) {

  }

  async ngOnInit() {
    this.wService.setAutoRefresh(this.city);
  }

  deleteCity(city:City){
    this.wService.DeleteCity(city);
  }

  refreshCity(city:City){
    this.wService.AddNewCity(city);
  }
}
