import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '../products/product.entity';
import { ExpertEntity } from '../expert/expert.entity';

@Entity('Categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @ManyToMany(() => ProductEntity, (product) => product.categories)
  products: ProductEntity[];

  @ManyToMany(() => ExpertEntity, (expert) => expert.categories)
  expert: ExpertEntity[];
}
