import * as types from '../constants/actionTypes';

export const getTasksAction = (userId, status, inBackground, clientId) => {
  return {
    type: types.GET_TASKS,
    userId: userId,
    status: status,
    inBackground: inBackground,
    clientId: clientId
  };
};

export const getTasksPendingAction = (status) => {
  return {
    type: types.GET_TASKS_PENDING,
    status: status
  };
};

export const getTasksSuccessAction = (payload, status) => {
  return {
    type: types.GET_TASKS_SUCCESS,
    payload: payload,
    status: status
  };
};

export const getTasksErrorAction = (error, status) => {
  return {
    type: types.GET_TASKS_ERROR,
    error: error,
    status: status
  };
};

export const setTasksAction = (data) => {
  return {
    type: types.SET_TASKS,
    data: data
  };
};

export const addTaskAction = (data) => {
  return {
    type: types.ADD_TASK,
    data: data
  };
};

export const updateTasksAction = (leadId, lead) => {
  return {
    type: types.UPDATE_TASKS,
    leadId: leadId,
    lead: lead
  };
};

export const setIsTaskSelectedAction = (leadId, isSelected) => {
  return {
    type: types.IS_TASK_SELECTED,
    leadId: leadId,
    isSelected: isSelected
  };
};