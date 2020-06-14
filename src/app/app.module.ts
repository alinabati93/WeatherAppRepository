import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcButtonComponent } from './calculator/calc-button/calc-button.component';
import { CalcContainerComponent } from './calculator/calc-container/calc-container.component';
import { CalcHeaderComponent } from './calculator/calc-header/calc-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcButtonComponent,
    CalcContainerComponent,
    CalcHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
