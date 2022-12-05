import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CardsService } from './cards.service';
import { OpenDeck } from './domain/dto/deck/open-deck.dto';
import { DrawDeck } from './domain/dto/deck/draw-deck.dto';
import { CreateDeck } from './domain/dto/deck/create-deck.dto';
import { CreateParams } from './domain/dto/params/create-params.dto';
import { UuidParam } from './domain/dto/params/uuid-param.dto'; 
import { CountParam } from './domain/dto/params/count-param.dto';
import { DeckBuilderService } from './domain/service/deck-builder.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('game')
export class CardsController {
    constructor(
        private readonly cardGameService: CardsService,
        private readonly deckBuilderService: DeckBuilderService,
    ) {}

    @Post('/create')
    @ApiResponse({
        status: 201,
        type: CreateDeck
    })
    async create(@Body() params: CreateParams) {
        const { type, shuffled } = params;

        const cardItems = this.deckBuilderService.execute(type, shuffled);

        const cardGame = await this.cardGameService.create(type, shuffled, cardItems);

        return new CreateDeck(cardGame);
    }

    @Get('/open/:id')
    @ApiResponse({
        status: 200,
        type: OpenDeck
    })
    async open(@Param() params: UuidParam) {
        const cardGame = await this.cardGameService.findOne(params.id);

        if (cardGame === null) {
            throw new NotFoundException();
        }

        return new OpenDeck(cardGame);
    }

    @Get('/draw/:id')
    @ApiResponse({
        status: 200,
        type: DrawDeck,
        isArray: false
    })
    async draw(@Param() params: UuidParam, @Query() queryParam: CountParam) {
        let { count } = queryParam;
        const cardGame = await this.cardGameService.findOne(params.id);

        if (cardGame === null) {
            throw new NotFoundException();
        }

        if (count > cardGame.cards.length) {
            count = cardGame.cards.length;
        }

        const cards = await this.cardGameService.draw(params.id, count);

        return new DrawDeck(cards);
    }
}
