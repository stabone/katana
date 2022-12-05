import { DeckType } from '../../enums/deck-type.enum';
import { CardGame } from '../../../card-game.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeck {
  constructor(cardGame: CardGame) {
    this.deckId = cardGame.id;
    this.remaining = cardGame.cards.length;
    this.shuffled = cardGame.shuffled;
    this.type = cardGame.type;
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

  @ApiProperty()
  remaining: number;
}