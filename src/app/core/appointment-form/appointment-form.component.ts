import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
    MatFormFieldModule, 
    MatInputModule
  ],
})
export class AppointmentFormComponent {

  formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    weddingDate: new FormControl(''),
    priceRange: new FormControl(''),
    birthDate: new FormControl(''),
    agreedAppointment: new FormControl(''),
    agreedConsent: new FormControl(''),
    emailNotification: new FormControl(''),
    smsNotification: new FormControl(''),
  });
}
