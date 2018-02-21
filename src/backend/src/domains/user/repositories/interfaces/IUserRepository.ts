import {IRepository} from "../../../../infrastructure/domains/repositories/interfaces/IRepository";
import {UserEntity} from "../typesql/entities/User";

export interface IUserRepository extends IRepository<UserEntity> {

  getUserByEmail(email: string);

}
