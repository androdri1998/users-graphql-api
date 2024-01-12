import { ProfileDTO } from "../dtos/Profile.dto";

export interface ProfilesRepository {
  getById(id: string): Promise<ProfileDTO | null>;
  index(): Promise<ProfileDTO[]>;
  create(name: string): Promise<ProfileDTO>;
  deleteById(id: string): Promise<boolean | null>;
}
