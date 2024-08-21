import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "../products/product.entity";
import { ExpertEntity } from "../expert/expert.entity";

@Entity('Categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];

    @OneToMany(() => ExpertEntity, (expert) => expert.category)
    expert: ExpertEntity[];
}