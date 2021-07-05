import * as types from '../constants/actionTypes';

const initialState = {
  isPending: false,
  isError: false,
  data: []
};

export default function requests(state = initialState, action) {
  switch (action.type) {
    case types.SET_REQUESTS:
      let data = action.data;
      return {
        ...state,
        isPending: false,
        isError: false,
        data: data,
      };
    case types.ADD_REQUEST:
        let addProperty = [action.data];
      return {
          ...state,
          data: [...addProperty, ...state.data],
        };
    case types.UPDATE_REQUEST:
      //update request
      return {
        ...state,
        data: state.data.map((request, index) => {
          if (request.requestId === action.requestId) {
            return action.data;
          }
          return request;
        }),
      };
    case types.DELETE_REQUEST:
      console.log("Request data ",action, state.data.filter((request, index) => {
        if (request.requestId === action.requestId) {
          return false;
        }
        return true;
      }))
      return {
          ...state,
          data: state.data.filter((request, index) => {
            if (request.requestId === action.requestId) {
              return false;
            }
            return true;
          })
        };
    default:
      return state;
  }
}