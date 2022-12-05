import { Test, TestingModule } from '@nestjs/testing';
import { DeckType } from '../enums/deck-type.enum';
import { DeckBuilderService } from './deck-builder.service';
import { Card } from '../dto/card';

describe('Deck Builder', () => {
  let builder: DeckBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckBuilderService],
    }).compile();

    builder = module.get<DeckBuilderService>(DeckBuilderService);
  });

  it('create short deck', () => {
    const cards = builder.execute(DeckType.SHORT, false);
    const suits = new Set<string>();
    const values = new  Set<string>()

    for (let ii = 0; ii < cards.length; ii++) {
        const card: Card = cards[ii];

        suits.add(card.suit);
        values.add(card.value);
    }

    expect(cards.length).toBe(32);

    expect(['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'])
        .toMatchObject(Array.from(suits.values()));

    expect(['7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'])
        .toMatchObject(Array.from(values.values()));
  });

  it('create full deck', () => {
    const cards = builder.execute(DeckType.FULL, false);
    const suits = new Set<string>();
    const values = new  Set<string>()

    for (let ii = 0; ii < cards.length; ii++) {
        const card: Card = cards[ii];

        suits.add(card.suit);
        values.add(card.value);
    }

    expect(cards.length).toBe(52);

    expect(['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'])
        .toMatchObject(Array.from(suits.values()));

    expect(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'])
        .toMatchObject(Array.from(values.values()));
  });
});
