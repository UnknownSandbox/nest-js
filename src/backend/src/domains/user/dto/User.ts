import { IsString, IsEmail } from 'class-validator';
import {DTO} from "../../../infrastructure/domains/DTO";

export class UserDTO extends DTO{
  @IsString() readonly name: string;
  @IsEmail() readonly email: string;
}
