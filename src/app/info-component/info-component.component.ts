import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-info-component',
  standalone: true,
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})

export class InfoComponent {
  constructor() { } 
  @Input({required: true}) Latitude!: string;
  @Input({required: true}) countryName!: string;
  @Input({required: true}) countryCity!: string;
  @Input({required: true}) Region!: string;
  @Input({required: true}) IncomeLevel!: string;
  @Input({required: true}) Longitude!: string;


}
