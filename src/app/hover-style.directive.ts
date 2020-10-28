import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() style: string;
  constructor(private elm: ElementRef) {

  }
  @HostListener('mouseenter') mouseEnter(): void {
    switch (this.style) {
      case 'decoration':
        this.elm.nativeElement.style.textDecoration = 'underline';
        break;
      case 'weight':
        this.elm.nativeElement.style.fontWeight = 'bold';
        break;
    }
  }
  @HostListener('mouseleave') mouseLeave(): void {
    switch (this.style) {
      case 'decoration':
        this.elm.nativeElement.style.textDecoration = 'none';
        break;
      case 'weight':
        this.elm.nativeElement.style.fontWeight = 'normal';
        break;
    }
  }
}
