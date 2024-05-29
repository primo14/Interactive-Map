import { Directive, Renderer2, OnInit, ElementRef,HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: 'appCountry'
})

export class CountryDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onclick(eventData: Event) {
      
         console.log("here");
      
  }
}
