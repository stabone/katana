import { SuitName } from '../enums/suit-name.enum';
import { CardName } from '../enums/card-name.enum';
import { PlayingCardInterface } from './playing-card.interface';


export class FullPlayingCards implements PlayingCardInterface {
  suits(): string[] {
    return [
      SuitName.CLUBS,
      SuitName.DIAMONDS,
      SuitName.HEARTS,
      SuitName.SPADES
    ];
  }

  cards(): string[] {
    return [
      CardName.TWO,
      CardName.THREE, 
      CardName.FOUR, 
      CardName.FIVE, 
      CardName.SIX, 
      CardName.SEVEN, 
      CardName.EIGHT, 
      CardName.NINE, 
      CardName.TEN, 
      CardName.JACK, 
      CardName.QUEEN, 
      CardName.KING, 
      CardName.ACE
    ];
  }
}
