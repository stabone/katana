import { DataSource } from 'typeorm';
import { CardGame } from './card-game.entity';

export const cardGameProviders = [
  {
    provide: 'CARD_GAME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CardGame),
    inject: ['DATA_SOURCE'],
  },
];