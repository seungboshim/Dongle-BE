import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderItem } from "./order-item.entity";

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn({ name: 'order_id' })
  orderId: number;

  @OneToMany(() => OrderItem, orderItem => orderItem.order, { cascade: true })
  orderItems: OrderItem[];

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @RelationId((order: Order) => order.user)
  @Column({ name: 'user_id' }) 
  userId: number;

  @CreateDateColumn({ name: 'order_date' })
  orderDate: Date;

  @Column({ name: 'total_price' })
  totalPrice: number;

  @Column({ nullable: true })
  status: string;

  @Column({ name: 'receiver_name' })
  receiverName: string;

  @Column()
  addr: string;

  @Column({ name: 'addr_detail' })
  addrDetail: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

}