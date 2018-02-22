import {UserDto} from "../../dto/UserDto";

export interface IUserApi {

  signUpNewUser(user: UserDto);
  getAllUsers();
}
