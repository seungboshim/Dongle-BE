import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Order } from "./order.entity";
import { Item } from "src/items/entities/item.entity";

@Entity({ name: 'order_item' })
export class OrderItem {
  @PrimaryGeneratedColumn({ name: 'order_item_id' })
  orderItemId: number;

  @ManyToOne(() => Order, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @RelationId((orderItem: OrderItem) => orderItem.order)
  @Column({ name: 'order_id' })
  orderId: number;

  @ManyToOne(() => Item, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @RelationId((orderItem: OrderItem) => orderItem.item)
  @Column({ name: 'item_id' })
  itemId: number;

  @Column({ name: 'item_count' })
  itemCount: number;

  @Column()
  price: number;
}