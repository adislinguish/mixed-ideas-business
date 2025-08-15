import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ControlErrorsDirective } from './control-errors.directive';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ControlErrorsDirective
  ],
})
export class ErrorMessageComponent {

  @Input() control: FormControl = new FormControl();
  @Input() model: NgModel | undefined;
}
