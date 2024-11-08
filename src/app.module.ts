import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { PetModule } from './pets/pet.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'dongle_market',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      extra: {
        connectionLimit: 10,
        maxIdle: 0,
      }
    }),
    HttpModule,
    UsersModule,
    ItemsModule,
    AuthModule,
    PetModule,
    OrdersModule,
    CartsModule,
  ],
  controllers: [AppController],
  // 컨트롤러 : express의 라우터와 같은 역할, url을 가져오고 함수를 실행
  providers: [],
})
export class AppModule {}
