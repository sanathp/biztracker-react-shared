import * as types from '../constants/actionTypes';

export const setRequestsAction = (data) => {
  return {
    type: types.SET_REQUESTS,
    data: data
  };
};

export const addRequestAction = (data) => {
  return {
    type: types.ADD_REQUEST,
    data: data
  };
};

export const updateRequestAction = (requestId, data) => {
  return {
    type: types.UPDATE_REQUEST,
    requestId: requestId,
    data: data
  };
};
