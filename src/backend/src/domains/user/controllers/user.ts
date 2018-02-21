import {Body, Controller, Post} from '@nestjs/common';
import {Api} from "../logic";
import {UserDTO} from "../dto/User";
import { validate } from 'class-validator';

@Controller('users')
export class UsersController {
  private _userLogic: Api;

  constructor(){
    this._userLogic = new Api();
  }

  @Post()
  async create(@Body() userDto: UserDTO) {
    const validationResult = await validate(userDto);
    if(validationResult.length === 0){
      return this._userLogic.signUpNewUser(userDto);
    }else{
      return validationResult;
    }

  }

}
