import { Directive } from '@angular/core';
import { ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightPriority]'
})
export class HighlightPriorityDirective {

  @Input() set appHighlightPriority(priority: string) {
    if (priority === 'high') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    } else if (priority === 'medium') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) { }

}
