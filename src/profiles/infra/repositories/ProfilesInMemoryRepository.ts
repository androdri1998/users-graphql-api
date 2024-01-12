import { ProfileDTO } from "../../dtos/Profile.dto";
import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getNextId } from "../database";

export default class ProfilesInMemoryRepository implements ProfilesRepository {
  databaseProvider: { [key: number]: ProfileDTO };

  constructor(databaseProvider: { [key: number]: ProfileDTO }) {
    this.databaseProvider = databaseProvider;
  }

  async getById(id: string): Promise<ProfileDTO | null> {
    const profile = this.databaseProvider[id];

    return profile || null;
  }

  async index(): Promise<ProfileDTO[]> {
    return Object.values(this.databaseProvider).map((value) => value);
  }

  async create(name: string): Promise<ProfileDTO> {
    const id = getNextId();
    const profile: ProfileDTO = {
      id: String(id),
      name,
    };

    this.databaseProvider[id] = profile;

    return profile;
  }

  async deleteById(id: string): Promise<boolean | null> {
    const profile = await this.getById(id);

    if (!profile) {
      return null;
    }

    delete this.databaseProvider[id];

    return true;
  }
}
