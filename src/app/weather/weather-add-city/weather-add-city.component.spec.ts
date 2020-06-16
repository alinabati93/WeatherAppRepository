import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAddCityComponent } from './weather-add-city.component';

describe('WeatherAddCityComponent', () => {
  let component: WeatherAddCityComponent;
  let fixture: ComponentFixture<WeatherAddCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAddCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAddCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
