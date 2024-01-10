import { UserDTO, UserStatus } from "../dtos/User.dto";

export type TCreateUserDTO = Omit<UserDTO, "id">;

export type TUpdateUserDTO = {
  id: string;
  name?: string;
  email?: string;
  age?: number;
  salary_real?: number;
  vip?: boolean;
  status?: UserStatus;
  profile_id?: string;
};

export interface UsersRepository {
  getById(id: string): Promise<UserDTO | null>;
  index(): Promise<UserDTO[]>;
  create(user: TCreateUserDTO): Promise<UserDTO>;
  getByEmail(email: string): Promise<UserDTO | null>;
  deleteById(id: string): Promise<Boolean | null>;
  updateById(user: TUpdateUserDTO): Promise<UserDTO>;
}
