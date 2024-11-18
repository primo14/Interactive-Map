import { Component,  Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent  {

  @Output() send = new EventEmitter<string>();
  @Output() leave = new EventEmitter();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const country = Array.from(this.el.nativeElement.querySelectorAll('path')) as SVGElement[]; // convert NodeList to array
    
    let current = '';
    country.forEach((selected) => { // for each svg path
      this.renderer.listen(selected, 'mouseenter', () => {
        current = selected.id;
        this.send.emit(current);
      });
      
    });
  } 
}