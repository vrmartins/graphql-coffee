import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeInput {
  @Field({ description: 'Coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
