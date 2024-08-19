import {createAction, props} from "@ngrx/store";
import {profileModel} from "../../models/profile.model";

export const getAllProfiles = createAction("[Profile] Get All Profiles");
export const getAllProfilesSuccess = createAction("[Profile] Get All Profiles Success", props<{ profiles: profileModel[] }>());
export const getAllProfilesFailed = createAction("[Profile] Get All Profiles Failed", props<{ error: string }>());
