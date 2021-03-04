import * as types from "../constants/actionTypes";

export const getProjectsAction = (clientId) => {
  return {
    type: types.GET_PROJECTS,
    clientId: clientId,
  };
};

export const getProjectsPendingAction = () => {
  return {
    type: types.GET_PROJECTS_PENDING,
  };
};

export const getProjectsSuccessAction = (payload) => {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    payload: payload,
  };
};

export const getProjectsErrorAction = (error) => {
  return {
    type: types.GET_PROJECTS_ERROR,
    error: error,
  };
};

export const setProjectsAction = data => {
  return {
    type: types.SET_PROJECTS,
    data: data
  };
};
