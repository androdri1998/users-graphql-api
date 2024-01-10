import { ID, Field, InputType } from "type-graphql";

@InputType()
export class DeleteUserInput {
  @Field((type) => ID)
  readonly id: string;
}
