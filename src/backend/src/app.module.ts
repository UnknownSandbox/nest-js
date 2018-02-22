import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserModule} from "./domains/user/user.module";
import {DatabaseModule} from "./core/database/typeorm/Connection";

@Module({
  modules: [
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController],
  components: [],
})

export class ApplicationModule {}
