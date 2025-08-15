import { Component, model, signal } from '@angular/core';
import { weddignDresses } from './wedding-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wedding-table',
  imports: [
    FormsModule
  ],
  templateUrl: './wedding-table.component.html',
  styleUrl: './wedding-table.component.scss'
})
export class WeddingTableComponent {

  weddignDresses = signal(weddignDresses);

  test = model(1);
}
