import * as types from "../constants/actionTypes";

const initialState = {
  isPending: true,
  isError: false,
  data: []
};

export default function users(state = initialState, action) {
  const { type, payload, error } = action;
  //filter users for whom isMusugu is true
  //musugu users are used by us monitor the data without using admin credentials
  const removeMusuguUsers = user => {
    return user.isMusugu ? false : true
  }
  switch (type) {
    case types.GET_USERS_SUCCESS:
      return {
        isPending: false,
        isError: false,
        data: payload.filter(removeMusuguUsers),
      };
    case types.GET_USERS_PENDING:
      return {
        isPending: true,
        isError: false,
        data: [],
      };
    case types.GET_USERS_ERROR:
      return {
        isPending: false,
        isError: true,
        error: error,
      };
    case types.SET_USERS:
      return {
        isPending: false,
        isError: false,
        data: action.data.filter(removeMusuguUsers)
      };
    default:
      return state;
  }
}
