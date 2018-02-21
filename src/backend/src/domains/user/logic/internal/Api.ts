import {IAPI} from "../interfaces/IApi";
import {UserDTO} from "../../dto/User";
import {IUserRepository} from "../../repositories/interfaces/IUserRepository";
import {UserRepository, UserEntity as UserEntity} from "../../repositories";

export class Api implements IAPI {
  private _userRepository: IUserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async signUpNewUser(user: UserDTO) {
    let userEntity = new UserEntity();
    userEntity = await userEntity.createFromDTO(user);

    return await this._userRepository.create(userEntity);
  }
}
