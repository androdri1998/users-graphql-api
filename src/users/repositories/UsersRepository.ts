import { UserDTO } from "../dtos/User.dto";

export interface UsersRepository {
  getById(id: number): Promise<UserDTO | null>;
  index(): Promise<UserDTO[]>;
}
