import {Body, Controller, Get, Inject, Param, Post, Req, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserApi as UserApi} from "../logic";
import {UserDto} from "../dto/UserDto";
import {ApiOperation} from "@nestjs/swagger";

@Controller('users')
export class UsersController {
  private _userLogic: UserApi;

  constructor(@Inject(UserApi) userLogic) {
    this._userLogic = userLogic;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ title: 'Create user' })
  async create(@Body() userDto: UserDto) {
    return this._userLogic.signUpNewUser(userDto);
  }

  @Get()
  @ApiOperation({ title: 'Get all users' })
  async findAll() {
    return this._userLogic.getAllUsers();
  }


  @Get("/byEmail/:email")
  @ApiOperation({ title: 'Get user by email' })
  async getUserByEmail(@Param("email") email: string) {
    return this._userLogic.getUserByEmail(email);
  }


}
