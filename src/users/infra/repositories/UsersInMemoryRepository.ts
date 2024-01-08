import { UserDTO } from "../../dtos/User.dto";
import { UsersRepository } from "../../repositories/UsersRepository";

export default class UsersInMemoryRepository implements UsersRepository {
  databaseProvider: { [key: number]: UserDTO };

  constructor(databaseProvider: { [key: number]: UserDTO }) {
    this.databaseProvider = databaseProvider;
  }

  async getById(id: number): Promise<UserDTO | null> {
    const foundUser = this.databaseProvider[id];

    return foundUser || null;
  }

  async index(): Promise<UserDTO[]> {
    return Object.values(this.databaseProvider).map((value) => value);
  }
}
