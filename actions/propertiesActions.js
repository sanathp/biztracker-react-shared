import * as types from '../constants/actionTypes';

export const getPropertiesAction = (userId, clientId) => {
  return {
    type: types.GET_PROPERTIES,
    userId: userId,
    clientId: clientId
  };
};

export const getPropertiesPendingAction = (status) => {
  return {
    type: types.GET_PROPERTIES_PENDING,
    status: status
  };
};

export const getPropertiesSuccessAction = (payload) => {
  return {
    type: types.GET_PROPERTIES_SUCCESS,
    payload: payload
  };
};

export const getPropertiesErrorAction = (error, status) => {
  return {
    type: types.GET_PROPERTIES_ERROR,
    error: error
  };
};

export const setPropertiesAction = (data) => {
  return {
    type: types.SET_PROPERTIES,
    data: data
  };
};

export const addPropertyAction = (data) => {
  return {
    type: types.ADD_PROPERTY,
    data: data
  };
};

export const updatePropertyAction = (propertyId, data) => {
  return {
    type: types.UPDATE_PROPERTY,
    propertyId: propertyId,
    data: data
  };
};
