import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHightlightDirective]'
})
export class BetterHightlightDirectiveDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color','blue')
  }

  @HostListener('mouseenter') mouseover(event:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color','yellow')
  }
  @HostListener('mouseleave') mouseleave(event:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color','green')
  }
}
