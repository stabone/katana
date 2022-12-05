import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty } from 'class-validator';
import { Transform } from "class-transformer";

import { DeckType } from '../../enums/deck-type.enum';

export class CreateParams {
  @ApiProperty({
    enum: DeckType,
    isArray: false,
    example: DeckType.FULL
  })
  @IsNotEmpty()
  @IsEnum(DeckType)
  type: DeckType;

  @ApiProperty()
  @Transform(params => params.value === 'true')
  @IsBoolean()
  @IsNotEmpty()
  shuffled: boolean;
}
