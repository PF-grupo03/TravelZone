import 'reflect-metadata';
import { registerAs } from '@nestjs/config';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from './env.config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT as unknown as number,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: ['error'],
  dropSchema: false,
  synchronize: true,
};
export const typeOrmConfig = registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);