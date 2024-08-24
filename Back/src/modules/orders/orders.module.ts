import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderEntity } from './order.entity';
import { OrderDetailsEntity } from './orderDetails.entity';
import { UserEntity } from '../users/user.entity';
import { ProductEntity } from '../products/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    OrderEntity,
    OrderDetailsEntity,
    UserEntity,
    ProductEntity
  ])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository]
})
export class OrdersModule {}
