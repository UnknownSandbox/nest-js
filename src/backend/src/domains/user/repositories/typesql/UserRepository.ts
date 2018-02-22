import {Repository} from "../../../../infrastructure/domains/repositories/typesql/Repository";
import {UserEntity} from "./entities/UserEntity";
import {IUserRepository} from "../interfaces/IUserRepository";
import {Connection as ORMConnection} from "typeorm";

export class UserRepository extends Repository<UserEntity> implements IUserRepository {

  constructor(connection: ORMConnection) {
    super(connection, UserEntity.name);
  }

  async getUserByEmail(email: string) {
    return await this._repository.find({
      email: email
    });
  }


}
