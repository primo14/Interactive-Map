import { Component } from '@angular/core';
import { SvgComponent } from './svg/svg.component';
import { InfoComponent } from './info-component/info-component.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SvgComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd280_app';

  countryC = '';
  capital = " ";
  countryN = " ";
  incomeLevel = " ";
  Longitude = " ";
  Latitude = " ";
  region = " ";

  constructor(private apiService: ApiService) { }

  sendData(countryCode: string) {
    this.countryC = countryCode;
    this.apiService.getData(countryCode).subscribe((data: any) => {
      this.countryN = data[1][0].name;
      this.region = data[1][0].region.value;
      this.capital = data[1][0].capitalCity;
      this.incomeLevel = data[1][0].incomeLevel.value;
      this.Longitude = data[1][0].longitude;
      this.Latitude = data[1][0].latitude;
    });
  }
}