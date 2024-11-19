import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { SvgModule } from './svg/svg.module';
import { InfoComponent } from './info-component/info-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgModule, InfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd280_app';

  constructor(private http: HttpClient,private dialog: MatDialog,private el: ElementRef) { }
  

  MouseX = 0;
  MouseY = 0;

  countryC = '';
  capital = " ";
  countryN = " ";
  Longitude = " ";
  Latitude = " ";
  region = " ";

  
  sendData(countryCode: string) {
    this.el.nativeElement.querySelector('path')!.addEventListener('mouseenter', (event: MouseEvent) => {
      this.MouseX = event.clientX;
      this.MouseY = event.clientY;
    });
    this.countryC = countryCode;
    this.http.get<any>('https://api.worldbank.org/v2/en/country/' + countryCode + "?format=json")
      .subscribe((data) => {
        this.countryN = data[1][0].name;
        this.region = data[1][0].region.value;
        this.capital = data[1][0].capitalCity;
        this.Longitude = data[1][0].longitude;
        this.Latitude = data[1][0].latitude;
      });
      if(this.dialog.openDialogs.length > 0) {
        this.dialog.closeAll();
      }
      
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.height = '210px';
    dialogConfig.position = { top: this.MouseY + 'px', left: this.MouseX + 'px' };
    dialogConfig.data = {
      countryC: this.countryC,
      capital: this.capital,
      countryN: this.countryN,
      Longitude: this.Longitude,
      Latitude: this.Latitude,
      region: this.region
    };

    this.dialog.open(InfoComponent, dialogConfig);
  }

  closePopup() {
    this.dialog.openDialogs[0].close();
  }
}