import { UsersRepository } from "../../repositories/UsersRepository";
import { IDeleteUserService } from "../DeleteUserService";

export class DeleteUserService implements IDeleteUserService {
  usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<Boolean> {
    return this.usersRepository.deleteById(id);
  }
}
