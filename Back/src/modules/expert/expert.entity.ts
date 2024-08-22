import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../categories/category.entity';

@Entity('expert')
export class ExpertEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  categoryId: string;

  @ManyToMany(() => CategoryEntity, (category) => category.expert)
  categories: CategoryEntity[];
}
