import { IsInt, IsDate } from 'class-validator';

export abstract class DTO {
  @IsInt() readonly id: number;

  @IsDate() readonly createDate: number;

  @IsDate() readonly updateDate: number;
}
