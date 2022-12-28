import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CoffeeType } from 'src/common/enums/coffee-type.enum';
import { Drink } from 'src/common/interfaces/drink.interface';
import { loggerMiddleware } from 'src/common/middleware/logger.middleware';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
@ObjectType({ description: 'Coffee model', implements: () => Drink })
export class Coffee {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;

  @Field({ middleware: [loggerMiddleware] })
  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ nullable: true })
  type?: CoffeeType;
}
