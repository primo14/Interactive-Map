import { Component, AfterViewInit, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements AfterViewInit {

  @Output() send = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const country = Array.from(this.el.nativeElement.querySelectorAll('path')) as SVGElement[]; // convert NodeList to array

    let current = '';
    country.forEach((selected) => { // for each svg path
      this.renderer.listen(selected, 'mouseover', () => {
        current = selected.id;
        this.send.emit(current);
      });
    });
  }
}