import {ProfileState} from "./profile.state";
import {createReducer, on} from "@ngrx/store";
import * as ProfileAction from "./profile.action";

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  loading: false,
  error: ''
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileAction.getAllProfiles, (state) => {
    return {
      ...state,
      loading: true,
      error: ''
    }
  }),
  on(ProfileAction.getAllProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles: profiles,
      loading: false,
    }
  }),
  on(ProfileAction.getAllProfilesFailed, (state, error) => {
    return {
      ...state,
      loading: false,
      error: error.error
    }
  })
)
