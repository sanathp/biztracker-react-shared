import * as types from '../constants/actionTypes';

const initialState = {
  isPending: true,
  isError: false,
  data: [],
  count: 0,
  fetchMoreIsPending: false,
  fetchMoreIsError: false
};

export default function searchLeads(state = initialState, action) {
  const {type, payload, error, count} = action;

  switch (type) {
    case types.SEARCH_LEADS_SUCCESS:
      return {
        fetchMoreIsPending: false,
        fetchMoreIsError: false,
        isPending: false,
        isError: false,
        data: payload,
        count: count
      };
    case types.SEARCH_LEADS_PENDING:
      return {
        ...state,
        isPending: true,
        isError: false,
        data: [],
      };
    case types.SEARCH_LEADS_ERROR:
      return {
        ...state,
        isPending: false,
        isError: true,
        error: error,
      };
    case types.SET_SEARCH_LEADS:
      return {
        ...state,
        isPending: false,
        isError: false,
        data: action.data,
        recentFetchCount: Array.isArray(payload) ? payload.length : 0
      };
    case types.UPDATE_SEARCH_LEADS:
        return {
          ...state,
          data: state.data.map((lead, index) => {
              if (lead.leadId === action.leadId) {
                  return action.lead;
              }

              return lead;
          }),
        };
    case types.ADD_SEARCH_LEAD:
      return {
            ...state,
            isPending: false,
            isError: false,
            data: [action.data, ...state.data],
      };
    case types.FETCH_MORE_SEARCH_LEADS_SUCCESS:
      return {
        ...state,
        fetchMoreIsPending: false,
        fetchMoreIsError: false,
        data: [...state.data, ...payload],
      };
    case types.FETCH_MORE_SEARCH_LEADS_PENDING:
      return {
        ...state,
        fetchMoreIsPending: true,
        fetchMoreIsError: false,
      };
    case types.FETCH_MORE_SEARCH_LEADS_ERROR:
      return {
        ...state,
        fetchMoreIsError: false,
        fetchMoreIsError: true,
        fetchMoreError: error,
      };
    default:
      return state;
  }
}