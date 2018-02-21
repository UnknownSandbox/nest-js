import {UserDTO} from "../../dto/User";

export interface IAPI {

  signUpNewUser(user: UserDTO);

}
