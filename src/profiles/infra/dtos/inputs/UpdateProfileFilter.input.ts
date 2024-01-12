import { ID, Field, InputType } from "type-graphql";

@InputType()
export class UpdateProfileFilterInput {
  @Field((type) => ID)
  readonly id: string;
}
