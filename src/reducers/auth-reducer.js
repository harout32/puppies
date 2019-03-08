import { AuthUserLoginType } from '../actions/types';

const defaultState = {
  name: null,
  email: null,
  isLoggedIn: false
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AuthUserLoginType:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isLoggedIn: true
      };
    default:
      return state;
  }
};
