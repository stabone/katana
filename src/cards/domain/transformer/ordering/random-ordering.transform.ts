import { Card } from '../../dto/card';
import { Transformer } from '../transform';

export class RandomOrdering implements Transformer {
  transform(cards: Card[]): Card[] {
    return cards.sort(() => Math.random() - 0.5);
  }
}
