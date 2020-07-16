import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector:'[bgColorDirective]'
})

export class bgHighlightDirective implements OnInit{
constructor(private elemntref:ElementRef){

}
  ngOnInit() {
    this.elemntref.nativeElement.style.backgroundColor='yellow'
  }
}
