import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Cart } from "src/carts/entities/cart.entity";

@Entity({ name: 'item' })
export class Item {
  @PrimaryGeneratedColumn({ name: 'item_id' })
  itemId: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  title: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  lprice: number;

  @Column({ nullable: true })
  hprice: number;

  @Column({ name: 'mall_name', nullable: true })
  mallName: string;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  count: number;

  @OneToMany(() => Cart, cart => cart.item)
  carts: Cart[];
}