import {CatState} from "./cat.state";
import {createReducer, on} from "@ngrx/store";
import * as CatActions from "./cat.action";


const initialState: CatState = {
  cats: [],
  loading: false,
  error: ''
};

export const catReducer = createReducer(
  initialState,
  on(CatActions.getAllCats, (state, quantity) => {
    return {
      ...state,
      loading: true,
      error: ''
    }
  }),
  on(CatActions.getAllCatsSuccess, (state, {cats}) => {
    return {
      ...state,
      cats: cats,
      loading: false,
    }
  }),
  on(CatActions.getAllCatsError, (state, error) => {
    return {
      ...state,
      loading: false,
      error: error.error
    }
  })
)
