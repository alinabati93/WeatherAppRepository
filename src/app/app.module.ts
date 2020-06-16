import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcButtonComponent } from './calculator/calc-button/calc-button.component';
import { CalcContainerComponent } from './calculator/calc-container/calc-container.component';
import { CalcHeaderComponent } from './calculator/calc-header/calc-header.component';
import { WeatherContainerComponent } from './weather/weather-container/weather-container.component';
import { WeatherAddCityComponent } from './weather/weather-add-city/weather-add-city.component';
import { WeatherCityListComponent } from './weather/weather-city-list/weather-city-list.component';
import { CityComponent } from './weather/city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
  import { from } from 'rxjs';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalcButtonComponent,
    CalcContainerComponent,
    CalcHeaderComponent,
    WeatherContainerComponent,
    WeatherAddCityComponent,
    WeatherCityListComponent,
    CityComponent,
    KelvinToCelciusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
