import { ProfileDTO } from "../../dtos/Profile.dto";
import { ProfilesRepository } from "../../repositories/ProfilesRepository";

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
}
