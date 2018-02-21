import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserModule} from "./domains/user/user.module";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  modules: [
    UserModule,
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nestjs',
      entities: [__dirname + '/domains/core/database/typeorm/entities'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  components: [],
})

export class ApplicationModule {}
