import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Card } from './domain/dto/card';
import { CardGame } from './card-game.entity';
import { DeckType } from './domain/enums/deck-type.enum';

@Injectable()
export class CardsService {
  constructor(
    @Inject('CARD_GAME_REPOSITORY')
    private cardGameRepository: Repository<CardGame>,
  ) {}

  findOne(id: string): Promise<CardGame|null> {
    return this.cardGameRepository.findOne({ where: { id } })
  }

  create(type: DeckType, shuffled: boolean, cards: Card[]): Promise<CardGame> {
    let entity = this.cardGameRepository.create();

    entity.cards = cards;
    entity.shuffled = shuffled;
    entity.type = type;

    return this.save(entity)
  }

  save(entity: CardGame): Promise<CardGame> {
    return this.cardGameRepository.save(entity)
  }

  draw(id: string, count: number): Promise<Card[]>{
    return this.findOne(id)
      .then(cardGame => {
        const cards = cardGame.cards.splice(0, count);

        this.save(cardGame);

        return cards;
      })
    ;
  }
}
