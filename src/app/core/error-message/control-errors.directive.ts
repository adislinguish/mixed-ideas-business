import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[controlErrors]',
})
export class ControlErrorsDirective {

  private el = inject(ElementRef);
  controlErrors = input.required<string>();

  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
