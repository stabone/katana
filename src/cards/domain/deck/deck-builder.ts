import { Card } from '../dto/card';
import { Transformer } from '../transformer/transform';

export class DeckBuilder {
  transformers: Transformer[] = [];
  cards: Card[] = [];

  setCards(cards: Card[]) {
    this.cards = cards;
  }

  setTransformer(transformer: Transformer): void {
    this.transformers.push(transformer);
  }

  buildDeck(): Card[] {
    for (let ii = 0; ii < this.transformers.length; ++ii) {
        this.cards = [ ...this.transformers[ii].transform(this.cards) ];
    }

    return this.cards;
  }
}