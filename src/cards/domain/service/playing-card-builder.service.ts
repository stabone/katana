import { DeckType } from '../enums/deck-type.enum';
import { FullPlayingCards } from '../card/full-playing-cards';
import { PlayingCardBuilder } from '../card/playing-card-builder';
import { ShortPlayingCards } from '../card/short-playing-cards';

export class PlayingCardBuilderService {
  execute(type: DeckType) {
    let builder = new PlayingCardBuilder();
    let playingCards = new FullPlayingCards();

    if (type === DeckType.SHORT) {
      playingCards = new ShortPlayingCards();
    }

    return builder.buildDeck(playingCards);
  }
}