import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  title = 'Concurrency App';

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnit() {
    this.activeRoute.params.subscribe({
      next: (value) => {
        //console.log(value);
      }
    });
  }
}
