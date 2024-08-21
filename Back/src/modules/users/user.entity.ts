import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../orders/order.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  dni: number;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  birthday: Date;

  @Column()
  IsAdmin: boolean;
  default = false;

  @OneToMany(() => OrderEntity, (order) => order.user)
  order?: OrderEntity[];
}

