import { TransformerType } from '../enums/transformer-type.enum';
import { DeckType } from '../enums/deck-type.enum';
import { FullPlayingCards } from '../card/full-playing-cards';
import { PlayingCardBuilder } from '../card/playing-card-builder';
import { ShortPlayingCards } from '../card/short-playing-cards';
import { DeckBuilder } from '../deck/deck-builder';
import { RandomOrdering } from '../transformer/ordering/random-ordering.transform';
import { PlayingCardInterface } from '../card/playing-card.interface';

export class DeckBuilderService {
  protected getPlayingCards(type: DeckType): PlayingCardInterface {
    let playingCards = new FullPlayingCards();

    if (type === DeckType.SHORT) {
      playingCards = new ShortPlayingCards();
    }

    return playingCards;
  }

  execute(type: DeckType, shuffled: boolean) {
    const cardBuilder = new PlayingCardBuilder();
    const deckBuilder = new DeckBuilder();

    let playingCards = this.getPlayingCards(type);

    const cards = cardBuilder.buildDeck(playingCards);

    deckBuilder.setCards(cards);

    let transformers = [];

    if (shuffled) {
      transformers.push(TransformerType.SHUFFLED);
    }

    for (let ii = 0; ii < transformers.length; ii++) {
      if (transformers[ii] === TransformerType.SHUFFLED) {
        deckBuilder.setTransformer(new RandomOrdering());
      }
    }

    return deckBuilder.buildDeck();
  }
}