import {Entity} from "../../../../../infrastructure/domains/repositories/typesql/Entity";
import {Column} from "typeorm";
import {UserDTO} from '../../../dto/User';
import {automapper} from "automapper-ts";

export class UserEntity extends Entity {

  @Column()
  name: string;

  @Column()
  email: string;

  async createFromDTO(dto: UserDTO) {
    return dto as UserEntity;
  }

  async castToDTO() {
    return automapper.map(UserEntity, UserDTO, this);
  }

}
