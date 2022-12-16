import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateCoffeeInput {
  @MinLength(3)
  @Field({ description: 'Coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
