import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { InfoComponent} from './info-component/info-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SvgComponent,InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'd280_app';
  countryC = '';
  
  
  sendData(countryCode: string) {
    this.countryC = countryCode;
    console.log(countryCode); 
}
}
