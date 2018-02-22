import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import {DTO} from "../../../infrastructure/domains/DTO";
import {ApiModelProperty} from "@nestjs/swagger";

export class UserDto extends DTO{
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
