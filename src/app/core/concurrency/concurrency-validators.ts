import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isNumber = /^[0-9]*$/.test(control.value);
      return isNumber ? null : { nonNumeric: { value: control.value } };
    };
}