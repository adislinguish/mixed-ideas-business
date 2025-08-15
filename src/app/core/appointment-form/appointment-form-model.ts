import { EmailValidator } from "@angular/forms";

export interface AppointmentForm {
    firstName: string;
    lastName: string;
    email: EmailValidator;
    phoneNumber: string;
    weddingDate: Date;
    priceRange: Range;
    birthDate: Date;
    agreedAppointment: boolean;
    agreedConsent: boolean;
    emailNotification: boolean;
    smsNotification: boolean;
}