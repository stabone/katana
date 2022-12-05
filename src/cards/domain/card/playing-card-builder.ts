import { PlayingCardInterface } from './playing-card.interface';
import { FullPlayingCards } from './full-playing-cards';
import { ShortPlayingCards } from './short-playing-cards';
import { Card } from '../dto/card';
import { DeckType } from '../enums/deck-type.enum';

export class PlayingCardBuilder {
  getCardDeck(type: DeckType): Card[] {
    let playingCards = new FullPlayingCards();

    if (type === DeckType.SHORT) {
      playingCards = new ShortPlayingCards();
    }

    return this.buildDeck(playingCards);
  }

  buildDeck(playingCard: PlayingCardInterface): Card[] {
    let cardItems = [ ];
    let suits = playingCard.suits();
    let cards = playingCard.cards();

    const upper = (val: string) => val.toUpperCase();

    suits = suits.map(upper);
    cards = cards.map(upper);

    for (let ii: number = 0; ii < suits.length; ii++) {
      const suit: string = suits[ii];

      for (let jj: number = 0; jj < cards.length; jj++) {
        cardItems.push(this.createCard(suit, cards[jj]));
      }
    }
    
    return cardItems;
  }

  protected createCard(suit: string, card: string): Card {
    const item: Card = {
      suit,
      value: card,
      code: this.createCode(suit, card),
    };

    return item;
  }

  protected createCode(suit: string, card: string): string {
    if (isNaN(Number(card))) {
      card = card.substring(0, 1);
    }

    return suit.substring(0, 1).concat(card);
  }
}
