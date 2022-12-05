import { Card } from "../dto/card";

export interface Transformer {
    transform(cards: Card[]): Card[];
}