import { Input, Output, Component, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';





@Component({
  standalone: true,
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})



export class SvgComponent {
  
  @Output() send= new EventEmitter();

  ngAfterViewInit() {
    let country = document.querySelectorAll<SVGElement>('path'); // gets an array of all of the paths in the DOM
    let current = ''; 
    country.forEach((selected) => {      // for each svg path
      
      selected.addEventListener('mouseover',  () => {
      current = selected.id;
      this.send.emit(current); 
      
      });
    });
    
  }

}
