import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class UuidParam {
  @ApiProperty()
  @IsUUID(4)
  id: string;
}
