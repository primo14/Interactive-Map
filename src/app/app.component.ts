import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { InfoComponent} from './info-component/info-component.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SvgComponent,InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
    let temp = '';
    this.countryC = countryCode;
    let data = this.http.get<any>('http://api.worldbank.org/v2/en/country/' + countryCode + "?format=json").subscribe((data) => {
    this.countryN =data[1][0].name;
    this.region = data [1][0].region.value;
    this.capital = data[1][0].capitalCity;  
    this.incomeLevel = data[1][0].incomeLevel.value;
    this.Longitude = data[1][0].longitude;
    this.Latitude = data[1][0].latitude;
  });

  }
}
