import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Profile } from "../dtos/models/Profile.model";
import { SearchProfileInput } from "../dtos/inputs/SearchProfile.input";
import { profiles as profileData } from "../database";

import ProfilesInMemoryRepository from "../repositories/ProfilesInMemoryRepository";
import FindProfilesService from "../../services/implementations/FindProfiles.service";
import FindProfileService from "../../services/implementations/FindProfile.service";
import { CreateProfileInput } from "../dtos/inputs/CreateProfile.input";
import { CreateProfileService } from "../../services/implementations/CreateProfile.service";

@Resolver(() => Profile)
export class ProfilesResolver {
  @Query(() => Profile, { nullable: true })
  async profile(@Arg("data") profile: SearchProfileInput) {
    const profilesRepository = new ProfilesInMemoryRepository(profileData);
    const findProfileService = new FindProfileService(profilesRepository);

    const profileFound = await findProfileService.execute(profile.id);
    return profileFound;
  }

  @Query(() => [Profile], { nullable: "items" })
  async profiles() {
    const profilesRepository = new ProfilesInMemoryRepository(profileData);
    const findProfilesService = new FindProfilesService(profilesRepository);

    const profiles = await findProfilesService.execute();
    return profiles;
  }

  @Mutation(() => Profile)
  async createProfile(@Arg("profile") profile: CreateProfileInput) {
    const profilesRepository = new ProfilesInMemoryRepository(profileData);
    const createProfileService = new CreateProfileService(profilesRepository);

    const newProfile = await createProfileService.execute(profile);

    return newProfile;
  }

  // @Mutation(() => Boolean, { nullable: true })
  // async deleteProfile() {}

  // @Mutation(() => Profile)
  // async updateProfile() {}
}
