import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-info-component',
  standalone: true,
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.scss'
})

export class InfoComponent {
  constructor() { } 
  @Input({required: true}) countryCode!: string;
  
}
