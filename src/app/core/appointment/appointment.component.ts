import { Component } from '@angular/core';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FCListBox, FCOption } from '../../common/fc-checkbox/fc-listbox';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  imports: [
    MatStepperModule,
    MatButtonModule,
    AppointmentFormComponent,
    FCListBox,
    FCOption
  ],
})
export class AppointmentComponent {

  public valueChanged(value: string) {
    //console.log(value);
  }

}
