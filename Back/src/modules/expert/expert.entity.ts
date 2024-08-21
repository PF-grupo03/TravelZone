import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => CategoryEntity, (category) => category.expert)
  category: CategoryEntity;
}
