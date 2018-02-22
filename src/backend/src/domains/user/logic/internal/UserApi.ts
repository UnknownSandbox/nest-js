import {IUserRepository} from "../../repositories/interfaces/IUserRepository";
import {UserRepository, UserEntity} from "../../repositories";
import {Component, Inject} from "@nestjs/common";
import {UserDto} from "../../dto/UserDto";
import {IUserApi} from "../interfaces/IUserApi";

@Component()
export class UserApi implements IUserApi {

  private _userRepository: IUserRepository;

  constructor(@Inject("connection") connection) {
    this._userRepository = new UserRepository(connection);
  }

  async signUpNewUser(user: UserDto) {
    let userEntity = new UserEntity();
    userEntity = await userEntity.createFromDTO(user);

    return await this._userRepository.create(userEntity);
  }

  async getAllUsers() {
    return await this._userRepository.findAll();
  }
}
