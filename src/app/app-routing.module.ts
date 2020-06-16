import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcContainerComponent } from './calculator/calc-container/calc-container.component';
import { WeatherContainerComponent } from './weather/weather-container/weather-container.component';


const routes: Routes = [
  {
    path:"calculator",
    component:CalcContainerComponent
  },
  {
    path:"weather",
    component:WeatherContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
