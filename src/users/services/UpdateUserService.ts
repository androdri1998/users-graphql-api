import { UserDTO } from "../dtos/User.dto";
import { TUpdateUserDTO } from "../repositories/UsersRepository";

export interface IUpdateUserService {
  execute(data: TUpdateUserDTO): Promise<UserDTO>;
}
