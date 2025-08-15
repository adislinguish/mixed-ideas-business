import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { concurrencies, Concurrency } from './concurrency-model';
import { numberOnlyValidator } from './concurrency-validators';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NonMumericValidatorDirective } from './non-numeric-valiator.directive';

@Component({
  selector: 'app-concurrency',
  templateUrl: './concurrency.component.html',
  styleUrl: './concurrency.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
    NonMumericValidatorDirective
  ],
})
export class ConcurrencyComponent {

  concurrencies: Concurrency[] = concurrencies;
  totalValue: string = '0';
  testingValue = model(true);

  // Using reactive form
  formGroup: FormGroup | any = new FormGroup({
    concurrency: new FormControl('', [Validators.required, numberOnlyValidator()]),
    firstConcurrency: new FormControl('', [Validators.required]),
    secondConcurrency: new FormControl('', [Validators.required])
  });

  //Using template driven
  isDisabled = signal(false);
  concurrencyForm: Concurrency = {  
    concurrency: {
      value: '',
      name: 'concurrency'
    },
    firstConcurrency: {
      options: this.concurrencies.map(c => {
        return {name: c.firstConcurrency, value: c.firstConcurrency};
      })
    },
    secondConcurrency: {
      options: this.concurrencies.map(c => {
        return {name: c.secondConcurrency, value: c.secondConcurrency};
      })
    }
  };

  //Functions
  public submit(value: string | number): void {
    let exchangeValue: string = '';
    if (value === 'form') {
      value = this.formGroup.controls.concurrency?.value;
      exchangeValue = this.formGroup.controls.secondConcurrency?.value;
    } else {
      value = this.concurrencyForm.concurrency?.value;
      exchangeValue = this.concurrencyForm.secondConcurrency?.value;
    }
    this.totalValue = `${(Number(value) + Math.random()).toString()} ${exchangeValue}`;
  }
}
