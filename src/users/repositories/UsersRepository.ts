import { UserDTO } from "../dtos/User.dto";

export interface UsersRepository {
  getById(id: string): Promise<UserDTO | null>;
  index(): Promise<UserDTO[]>;
}
