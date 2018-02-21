import {Repository} from "../../../../infrastructure/domains/repositories/typesql/Repository";
import {UserEntity} from "./entities/User";
import {IUserRepository} from "../interfaces/IUserRepository";

export class UserRepository extends Repository<UserEntity> implements IUserRepository{

  constructor() {
    super(UserEntity);
  }

  async getUserByEmail(email: string) {
    return await this._repository.find({
      email: email
    });
  }

}
