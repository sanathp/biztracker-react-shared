import * as types from '../constants/actionTypes';

export const searchLeadsAction = (
  clientId,
  userId,
  filterByStatus,
  filterBySource,
  filterByProjectId,
  filterByAssignedTo,
  fetchMore,
  lastItemUpdatedValue,
  isAdmin) => {
  //TODO: make empty strings as null
  return {
    type: types.SEARCH_LEADS,
    clientId: clientId,
    userId: userId,
    filterByStatus: filterByStatus,
    filterBySource: filterBySource,
    filterByProjectId: filterByProjectId,
    filterByAssignedTo: filterByAssignedTo,
    fetchMore: fetchMore,
    lastItemUpdatedValue: lastItemUpdatedValue,
    isAdmin: isAdmin
  };
};

export const searchLeadsByNumberAction = (
  clientId,
  userId,
  phoneNumber) => {
  return {
    type: types.SEARCH_LEADS_BY_NUMBER,
    clientId: clientId,
    userId: userId,
    phoneNumber: phoneNumber
  };
};

export const searchLeadsByNameAction = (
  clientId,
  userId,
  name) => {
  return {
    type: types.SEARCH_LEADS_BY_NAME,
    clientId: clientId,
    userId: userId,
    name: name
  };
};

export const searchLeadsPendingAction = () => {
  return {
    type: types.SEARCH_LEADS_PENDING,
  };
};

export const searchLeadsSuccessAction = (payload, count) => {
  return {
    type: types.SEARCH_LEADS_SUCCESS,
    payload: payload,
    count: count
  };
};

export const searchLeadsErrorAction = (error) => {
  return {
    type: types.SEARCH_LEADS_ERROR,
    error: error,
  };
};

export const fetchMoreSearchLeadsPendingAction = () => {
  return {
    type: types.FETCH_MORE_SEARCH_LEADS_PENDING,
  };
};

export const fetchMoreSearchLeadsSuccessAction = (payload) => {
  return {
    type: types.FETCH_MORE_SEARCH_LEADS_SUCCESS,
    payload: payload
  };
};

export const fetchMoreSearchLeadsErrorAction = (error) => {
  return {
    type: types.FETCH_MORE_SEARCH_LEADS_ERROR,
    error: error,
  };
};


export const addSearchLeadAction = (data) => {
  return {
    type: types.ADD_SEARCH_LEAD,
    data: data
  };
};

export const updateSearchLeadsAction = (leadId, lead) => {
  return {
    type: types.UPDATE_SEARCH_LEADS,
    leadId: leadId,
    lead: lead
  };
};