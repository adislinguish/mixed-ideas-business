import { Directive, Input, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[nonNumeric]',
  providers: [{provide: NG_VALIDATORS, useExisting: NonMumericValidatorDirective, multi: true}],
})
export class NonMumericValidatorDirective implements Validator {

  nonNumeric = input.required<string>();

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const isNumber = /^[0-9]*$/.test(control.value);
    return isNumber ? null : { nonNumeric: { value: control.value } };
  }
}
