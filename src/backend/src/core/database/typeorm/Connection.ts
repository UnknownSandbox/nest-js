import {createConnection, Connection} from 'typeorm';
import {Component, Module} from '@nestjs/common';
import {UserEntity} from "../../../domains/user/repositories/index";
import config from "../../config/config";

export const databaseProviders = [
  {
    provide: "connection",
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: config.db.postgres.host,
      port: config.db.postgres.port,
      username: config.db.postgres.user,
      password: config.db.postgres.password,
      database: config.db.postgres.dbName,
      entities: [
        UserEntity
      ],
      synchronize: true,
    })

  }
];

@Module({
  components: [...databaseProviders],
  exports: [...databaseProviders],
})

export class DatabaseModule {
}
