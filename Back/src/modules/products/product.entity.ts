import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../categories/category.entity';
import { OrderDetailsEntity } from '../orders/orderDetails.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  imgUrl: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[]

  @ManyToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.product)
  orderDetails: OrderDetailsEntity[];
}
