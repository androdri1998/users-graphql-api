import * as UuidHelper from "../../../app/infra/helpers/UuidHelper.helper";
import { UserDTO } from "../../dtos/User.dto";
import {
  TCreateUserDTO,
  UsersRepository,
} from "../../repositories/UsersRepository";

export default class UsersInMemoryRepository implements UsersRepository {
  databaseProvider: UserDTO[];

  constructor(databaseProvider: UserDTO[]) {
    this.databaseProvider = databaseProvider;
  }

  async getById(id: string): Promise<UserDTO | null> {
    const foundUser = this.databaseProvider.find((user) => user.id === id);

    return foundUser || null;
  }

  async getByEmail(email: string): Promise<UserDTO | null> {
    const foundUser = this.databaseProvider.find(
      (user) => user.email === email
    );

    return foundUser || null;
  }

  async index(): Promise<UserDTO[]> {
    return Object.values(this.databaseProvider).map((value) => value);
  }
  async create(userDTO: TCreateUserDTO): Promise<UserDTO> {
    const user: UserDTO = { ...userDTO, id: UuidHelper.generate() };

    this.databaseProvider.push(user);

    return user;
  }

  async deleteById(id: string): Promise<Boolean | null> {
    const userIndex = this.databaseProvider.findIndex(
      (currentUser) => currentUser.id === id
    );

    if (userIndex < 0) {
      return null;
    }

    this.databaseProvider.splice(userIndex, 1);

    return true;
  }
}
