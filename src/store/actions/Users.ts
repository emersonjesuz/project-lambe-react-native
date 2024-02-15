import userTypes from '../../types/user';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from './ActionsTypes';

export const login = (user: userTypes) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
