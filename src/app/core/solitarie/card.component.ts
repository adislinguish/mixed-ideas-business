import { Component, input } from '@angular/core';
import { Card } from './solitarie-model';

@Component({
  selector: 'app-card',
  template: `
    {{card().value}} {{card().suit}}
  `,
  styles: `
    :host {
      display: inline-block;
      border: 2px solid black;
      border-radius: 8px;
      height: 150px;
      width: 100px;
      background: white;

      padding: 8px;
      font-size: 3em;

      &.red {
        color: red;
      }

      &.facedown {
        background: darkblue;
        color: darkblue;
      }
    } 

  `,
  host: {
    '[class.red]': 'card().suit === "♥" || card().suit === "♦"' ,
    '[class.facedown]': '!card().faceUp'
  }
})
export class CardComponent {

  card = input.required<Card>();

}
