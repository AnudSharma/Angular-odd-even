import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlightDirective]'
})
export class BetterHightlightDirectiveDirective implements OnInit{
@Input() defaultColor:string='gray';
@Input() highlightColor:string='lightgreen';
  //use of hostbinding with hostlistener to style:you create a custom string to tag with a property
  @HostBinding('style.backgroundColor') backgroundColor:string //now this string you can use to style
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  //use of renderer to style
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color','blue')
  }
//use of renderer and host listener to style
  // @HostListener('mouseenter') mouseover(event:Event){
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color','yellow')//property of hosting element.eg-style and subproperty like background color
  // }
  // @HostListener('mouseleave') mouseleave(event:Event){
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color','green')
  // }

  //use of hostbinding to style:you create a custom string to tag with a property-you will not need renderer or element reference
  // @HostListener('mouseleave') mouseleave(event:Event){
  //  this.backgroundColor='pink'
  // }


  //we can use property binding as well-like giving a name to background color property and use @Input directive..a
  @HostListener('mouseenter') mouseenter(event:Event){
    this.backgroundColor=this.defaultColor;

   }
   @HostListener('mouseleave') mouseleave(event:Event){
    this.backgroundColor=this.highlightColor;

   }
}


