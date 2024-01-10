import { UserDTO } from "../dtos/User.dto";

export type TCreateUserDTO = Omit<UserDTO, "id">;
export interface UsersRepository {
  getById(id: string): Promise<UserDTO | null>;
  index(): Promise<UserDTO[]>;
  create(user: TCreateUserDTO): Promise<UserDTO>;
  getByEmail(email: string): Promise<UserDTO | null>;
  deleteById(id: string): Promise<Boolean>;
}
