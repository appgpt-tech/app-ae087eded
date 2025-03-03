//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  UserID: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Email: string;

  @Column('text', { nullable: true })
  Password: string;
}
