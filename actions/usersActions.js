import * as types from "../constants/actionTypes";

export const getUsersAction = (clientId) => {
  return {
    type: types.GET_USERS,
    clientId: clientId,
  };
};

export const getUsersPendingAction = () => {
  return {
    type: types.GET_USERS_PENDING,
  };
};

export const getUsersSuccessAction = (payload) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: payload,
  };
};

export const getUsersErrorAction = (error) => {
  return {
    type: types.GET_USERS_ERROR,
    error: error,
  };
};

export const setUsersAction = data => {
  return {
    type: types.SET_USERS,
    data: data
  };
};
