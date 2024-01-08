import { UserDTO } from "../../dtos/User.dto";
import { UsersRepository } from "../../repositories/UsersRepository";

export default class UsersInMemoryRepository implements UsersRepository {
  databaseProvider: UserDTO[];

  constructor(databaseProvider: UserDTO[]) {
    this.databaseProvider = databaseProvider;
  }

  async getById(id: string): Promise<UserDTO | null> {
    const foundUser = this.databaseProvider.find((user) => user.id === id);

    return foundUser || null;
  }

  async index(): Promise<UserDTO[]> {
    return Object.values(this.databaseProvider).map((value) => value);
  }
}
