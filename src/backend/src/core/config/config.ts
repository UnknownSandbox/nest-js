import * as Joi from 'joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number()
    .default(4040),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  POSTGRES_HOST: Joi.string().required()
    .description('postgres host url'),
  POSTGRES_DB: Joi.string().required()
    .description('postgres db name'),
  POSTGRES_USER: Joi.string().required()
    .description('postgres user'),
  POSTGRES_PASSWORD: Joi.string().required()
    .description('postgres user'),
  POSTGRES_PORT: Joi.number()
    .default(5432)
}).unknown()
  .required();

const {error, value: envVars} = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  db: {
    postgres: {
      host: envVars.POSTGRES_HOST,
      port: envVars.POSTGRES_PORT,
      user: envVars.POSTGRES_USER,
      password: envVars.POSTGRES_PASSWORD,
      dbName: envVars.POSTGRES_DB
    }
  }
};

export default config;
