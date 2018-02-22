import { IsInt, IsDate, IsOptional } from 'class-validator';
import {ApiModelProperty} from "@nestjs/swagger";

export abstract class DTO {
  @ApiModelProperty()
  @IsInt()
  @IsOptional()
  readonly id: number;

  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  readonly createDate: number;

  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  readonly updateDate: number;
}
