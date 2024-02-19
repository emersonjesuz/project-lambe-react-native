import UserTypes from '../../types/user';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/ActionsTypes';

const initialState = {
  user: {name: null, email: null},
};

type ActionsTypes = {
  type: string;
  payload: UserTypes;
};

const reducer = (state = initialState, actions: ActionsTypes) => {
  switch (actions.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: actions.payload.name,
        email: actions.payload.email,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
      };

    default:
      return state;
  }
};

export default reducer;
