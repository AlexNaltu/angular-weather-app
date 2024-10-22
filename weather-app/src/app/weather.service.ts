import { Injectable } from '@angular/core';
import { MY_WEATHER_API_KEY } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = MY_WEATHER_API_KEY.weatherApiKey;
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6d6edf30a2344c2ec4132bc32ef5d415`;
  constructor() {
    console.log(this.apiUrl);
  }
}
