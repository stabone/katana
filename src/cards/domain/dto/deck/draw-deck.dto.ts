import { ApiProperty } from '@nestjs/swagger';
import { Card } from '../../dto/card';

export class DrawDeck {
  constructor(cards: Card[]) {
    this.cards = cards;
  }

  @ApiProperty()
  cards: Card[];
}
