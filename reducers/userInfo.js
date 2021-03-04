import * as types from "../constants/actionTypes";

const initialState = {
  isPending: false,
  isError: false,
  data: []
};

export default function userInfo(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case types.SET_USER:
      return {
        isPending: false,
        isError: false,
        data: action.data
      };
    default:
      return state;
  }
}
