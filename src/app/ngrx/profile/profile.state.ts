import {profileModel} from "../../models/profile.model";

export interface ProfileState {
  profiles: profileModel[];
  profile: profileModel|null;
  loading: boolean;
  error: any;
}
