import { DeckType } from '../../enums/deck-type.enum';
import { Card } from '../../dto/card';
import { CardGame } from '../../../card-game.entity';
import { ApiProperty } from '@nestjs/swagger';

export class OpenDeck {
  constructor(cardGame: CardGame) {
    this.deckId = cardGame.id;
    this.type = cardGame.type;
    this.shuffled = cardGame.shuffled;
    this.cards = cardGame.cards;
    this.remaining = cardGame.cards.length;
  }

  @ApiProperty({
    example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8'
  })
  deckId: string;

  @ApiProperty({
    enum: DeckType,
    example: DeckType.FULL
  })
  type: DeckType;

  @ApiProperty()
  shuffled: boolean;

  @ApiProperty({
    example: 3
  })
  remaining: number;

  @ApiProperty({
    isArray: true,
  })
  cards: Card[];
}