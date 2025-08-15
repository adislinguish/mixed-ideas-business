import { Component } from '@angular/core';
import { CardComponent } from '../card.component';
import { Card, cardValues, suiteValues } from '../solitarie-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solitarie',
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './solitarie.component.html',
  styleUrl: './solitarie.component.scss'
})
export class SolitarieComponent {
  deck: Card[] = createDeck();
  tableu: Card[][] = this.createTableu();
  foundations: Card[][] = createFoundations();

  public createTableu(): Card[][] {
    const result: Card[][] = [];
    for(let i = 0; i < 7; i ++) {
      const stack = [];
      for(let j =0; j< i + 1; j++) {
        stack.push(this.deck.pop()!);
      }
      stack[stack.length - 1].faceUp = true;
      result.push(stack);
    }
    return result;
  }
}

function createDeck(): Card[] {
  const resultDeck: Card[] = [];
  for (const suit of suiteValues) {
    for (const value of cardValues) {
      resultDeck.push({id:resultDeck.length , value, suit: suit});
    }
  }
  shuffle(resultDeck);
  return resultDeck;
}

function shuffle(deck: Card[]): void {
  for (let i = 0; i < deck.length - 2; i++) {
    const swapIndex = Math.floor(Math.random() * deck.length);
    [deck[i], deck[swapIndex]] = [deck[swapIndex], deck[i]];
  }
}

function createFoundations(): Card[][] {
  return [[], [], [], []];
}
