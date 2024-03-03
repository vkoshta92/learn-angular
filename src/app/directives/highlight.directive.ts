import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
//   el:ElementRef
//   constructor(el:ElementRef) {
// this.el=el
//    }

// dependies injection shorter syntex el class me khi bhi use ker skte h kyoki private hai
constructor(private el:ElementRef) {

 }

  @HostBinding("style.backgroundColor")
  bgColor11="red"

  @HostListener('mouseenter')
  changeFontSize(){
    console.log('mouse enter');
    this.el.nativeElement.style.fontSize="50px"
  }

  @HostListener("mouseleave")
resetFontSize(){
  console.log('mouse leave');
  this.el.nativeElement.style.fontSize="20px"
}

}
