import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from './domain/dto/card';
import { DeckType } from './domain/enums/deck-type.enum';

@Entity()
export class CardGame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: DeckType,
    default: DeckType.FULL
  })
  type: DeckType;

  @Column('json')
  cards: Card[];

  @Column({
    type: 'boolean',
    default: false
  })
  shuffled: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;
}