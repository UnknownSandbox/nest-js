import {Module} from '@nestjs/common';
import {UsersController} from './controllers/UserController';
import {UserApi} from './logic/index';
import {DatabaseModule} from "../../core/database/typeorm/Connection";

@Module({
  controllers: [UsersController],
  components: [UserApi],
  imports: [DatabaseModule]
})
export class UserModule {
}
