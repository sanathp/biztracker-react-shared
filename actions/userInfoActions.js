import * as types from "../constants/actionTypes";

export const setUserInfoAction = data => {
  return {
    type: types.SET_USER_INFO,
    data: data
  };
};
