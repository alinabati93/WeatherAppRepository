import { WeatherData } from './weather-data';

export interface City{
  Name:string;
  WeatherData?:WeatherData;
  LastRefresh?:Date;
}
