import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, Min } from "class-validator";

export class CountParam {
  @ApiProperty()
  @Transform(params => {
    return parseInt(params.value);
  })
  @IsNumber()
  @Min(1)
  count: number;
}
