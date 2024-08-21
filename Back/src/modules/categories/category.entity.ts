import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../products/product.entity';
import { ExpertEntity } from '../expert/expert.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.categories)
  products: ProductEntity[];

  @OneToMany(() => ExpertEntity, (expert) => expert.categories)
  expert: ExpertEntity[];
}
