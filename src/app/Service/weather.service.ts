import { Injectable } from '@angular/core';
import { City } from '../model/City';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../model/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  Cities: City[] = [];

  constructor(private client: HttpClient) {
    this.Cities = this.GetSavedCities();
  }

  private GetCityWeather(city: City) {
    return this.client.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.Name}&appid=9e5a8142e4cc57ac87916bc21be61095`)
      .toPromise().then(res => {
        city.WeatherData=res as WeatherData;
        return res as WeatherData;
      },
      res => {
        return null;
      });
  }

  async AddNewCity(city: City) {
    city.IsLoading=true;
    let tempWeatherData = await this.GetCityWeather(city);
    if (tempWeatherData) {
      city.WeatherData = tempWeatherData;
      city.LastRefresh = new Date();
      setTimeout(() => {
        city.IsLoading=false;
        this.SaveCity(city);
      }, 500);
    }
  }

  private SaveCity(city: City) {
    let index = this.Cities.findIndex(x => x.Name == city.Name);
    if (index >= 0)
      this.UpdateCity(city);
    else {
      localStorage.setItem(city.Name.toLocaleLowerCase(), JSON.stringify(city));
      this.Cities.push(city);
    }
  }

  DeleteCity(city: City) {
    let index = this.Cities.findIndex(x => x.Name == city.Name);
    if (index >= 0) {
      clearInterval(city.AutoRefresh);
      this.Cities.splice(index, 1);
      localStorage.removeItem(city.Name);
    }
  }

  private UpdateCity(city: City) {
    localStorage.setItem(city.Name.toLocaleLowerCase(), JSON.stringify(city));
    let index = this.Cities.findIndex(x => x.Name == city.Name);
    this.Cities[index] = city;
  }

  private GetSavedCities() {
    var citiesCount = localStorage.length;
    let tempCities: City[] = [];
    for (var i = 0; i < citiesCount; i++) {
      let citiName = localStorage.key(i);
      let temp = localStorage.getItem(citiName);
      tempCities.push(JSON.parse(temp));
    }
    return tempCities;
  }

  setAutoRefresh(city:City){
    clearInterval(city.AutoRefresh);
    city.AutoRefresh=setInterval(()=>{
      this.AddNewCity(city);
    },10000);
  }
}
