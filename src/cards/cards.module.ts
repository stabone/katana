import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { CardsController } from './cards.controller';
import { cardGameProviders } from './card-game.provider';
import { CardsService } from './cards.service';
import { DeckBuilderService } from './domain/service/deck-builder.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [
    ...cardGameProviders,
    CardsService,
    DeckBuilderService,
  ]
})
export class CardsModule {}
