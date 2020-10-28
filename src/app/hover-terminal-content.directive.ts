import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverTerminalContent]'
})
export class HoverTerminalContentDirective {

  constructor(private elm: ElementRef) { }
  @HostListener('mouseenter') mouseEnter(): void {
    if (this.elm.nativeElement.classList.contains('first') || this.elm.nativeElement.classList.contains('last')) {
      this.elm.nativeElement.style.borderStyle = 'dotted';
    }
  }
  @HostListener('mouseleave') mouseLeave(): void {
    if (this.elm.nativeElement.classList.contains('first') || this.elm.nativeElement.classList.contains('last')) {
      this.elm.nativeElement.style.borderStyle = 'solid';
    }
  }
}
