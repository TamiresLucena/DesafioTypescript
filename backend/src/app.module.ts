import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './api/v1/products/products.module';
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    KnexModule.forRoot({
      config: configuration().database,
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
