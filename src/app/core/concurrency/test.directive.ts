import { Directive, input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[non-test]'
})
export class TestDirective implements Validator {

    nonTest = input.required<string>();

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return control.value;
    }
}