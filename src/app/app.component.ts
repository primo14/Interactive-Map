import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { SvgModule } from './svg/svg.module';
import { InfoComponent } from './info-component/info-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SvgModule, InfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd280_app';

  constructor(private http: HttpClient) { }

  countryC = '';
  capital = " ";
  countryN = " ";
  incomeLevel= " ";
  Longitude = " ";
  Latitude = " ";
  region = " ";
  
  sendData(countryCode: string) {
    this.countryC = countryCode;
    this.http.get<any>('https://api.worldbank.org/v2/en/country/' + countryCode + "?format=json")
      .subscribe((data) => {
        this.countryN = data[1][0].name;
        this.region = data[1][0].region.value;
        this.capital = data[1][0].capitalCity;
        this.incomeLevel = data[1][0].incomeLevel.value;
        this.Longitude = data[1][0].longitude;
        this.Latitude = data[1][0].latitude;
      });
  }
}