import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from '../products/product.entity';

@Entity('orderDetails')
export class OrderDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  orderId: string;

  @OneToOne(() => OrderEntity, (order) => order.orderDetails)
  order: OrderEntity;

  @ManyToMany(() => ProductEntity, (product) => product.orderDetails)
  product: ProductEntity[];
}
