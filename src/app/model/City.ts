import { WeatherData } from './weather-data';
import { TimeInterval } from 'rxjs';

export interface City{
  Name:string;
  LastRefresh?:Date;
  IsLoading:boolean;
  AutoRefresh?;
  WeatherData?:WeatherData;
}

