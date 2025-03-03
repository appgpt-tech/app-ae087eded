//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  OrderID: number;

  @Column('integer', { nullable: true })
  UserID: number;

  @Column('integer', { nullable: true })
  NoteDenomination: number;

  @Column('integer', { nullable: true })
  Quantity: number;

  @Column('real', { nullable: true })
  TotalAmount: number;

  @Column('text', { nullable: true })
  Status: string;

  @Column('date', { nullable: true })
  Timestamp: Date;
}
