import {Module} from '@nestjs/common';
import {UsersController} from './controllers/user';
import {Api as UserLogicApi} from './logic/index';

@Module({
  controllers: [UsersController],
  components: [UserLogicApi],
})
export class UserModule {
}
