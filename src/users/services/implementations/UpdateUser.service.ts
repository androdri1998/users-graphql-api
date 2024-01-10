import { UserDTO } from "../../dtos/User.dto";
import {
  TUpdateUserDTO,
  UsersRepository,
} from "../../repositories/UsersRepository";
import { IUpdateUserService } from "../UpdateUserService";

export class UpdateUserService implements IUpdateUserService {
  usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user: TUpdateUserDTO): Promise<UserDTO> {
    return await this.usersRepository.updateById(user);
  }
}
