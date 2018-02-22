import {Entity as CommonEntity} from "../../../../../infrastructure/domains/repositories/typesql/Entity";
import {Column, Entity} from "typeorm";
import {UserDto} from '../../../dto/UserDto';

@Entity()
export class UserEntity extends CommonEntity {

  @Column()
  name: string;

  @Column()
  email: string;

  async createFromDTO(dto: UserDto) {
    return dto as UserEntity;
  }

  async castToDTO() {
    return this as UserDto;
  }

}
