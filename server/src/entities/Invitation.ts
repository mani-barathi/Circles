import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";
import Circle from "./Circle";
import User from "./User";

@ObjectType()
@Entity()
export default class Invitation extends BaseEntity {
  @Field(() => Boolean)
  @Column({ default: true })
  active: Boolean;

  @Field(() => Int, { nullable: true })
  @PrimaryColumn()
  circleId: number;

  @ManyToOne(() => Circle, (circle) => circle.invitations, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "circleId", referencedColumnName: "id" })
  @Field(() => Circle)
  circle: Circle;

  @Field(() => Int, { nullable: true })
  @PrimaryColumn()
  senderId: number;

  @ManyToOne(() => User, (user) => user.sentInvitations, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "senderId", referencedColumnName: "id" })
  @Field(() => User)
  sender: User;

  @Field(() => Int, { nullable: true })
  @PrimaryColumn()
  recipientId: number;

  @ManyToOne(() => User, (user) => user.receivedinvitations, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "recipientId", referencedColumnName: "id" })
  @Field(() => User)
  recipient: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: string;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn()
  updatedAt: string;
}
