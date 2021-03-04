import * as types from '../constants/actionTypes';

const initialState = {
  isPending: true,
  isError: false,
  data: [],
  status: 'ALL'
};

export default function tasks(state = initialState, action) {
  const { type, payload, error, status } = action;
  let today = new Date();
  today.setHours(23, 59, 59, 999);
  let timestamp = Math.floor(today.getTime() / 1000);
  const filterFunc = lead => {
    return lead.status === 'NEW' ||
      (lead.status === 'FOLLOW_UP' && lead.followUpAt < timestamp) ||
      (lead.status === 'SITE_VISIT' && lead.siteVisitAt < timestamp) ||
      (lead.status === 'SITE_VISIT_DONE' && lead.followUpAt < timestamp && lead.followUpAt > 1000);
  }
  switch (type) {
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        isPending: false,
        isError: false,
        data: payload.filter(filterFunc),
        status: status
      };
    case types.GET_TASKS_PENDING:
      return {
        ...state,
        isPending: true,
        isError: false,
        data: [],
        status: status
      };
    case types.GET_TASKS_ERROR:
      return {
        ...state,
        isPending: false,
        isError: true,
        error: error,
        status: status
      };
    case types.SET_TASKS:
      let leads = action.data;
      //Remove other status leads if any
      leads = leads.filter(filterFunc);
      return {
        ...state,
        isPending: false,
        isError: false,
        data: leads,
      };
    case types.ADD_TASK:
        let addLead = [action.data];
        //Remove other status leads if any
        addLead = addLead.filter(filterFunc);
      return {
          ...state,
          isPending: false,
          isError: false,
          data: [...addLead, ...state.data],
        };
    case types.UPDATE_TASKS:
      //update lead
      let newLeads = state.data.map((lead, index) => {
        if (lead.leadId === action.leadId) {
          return action.lead;
        }
        return lead;
      });
      //Remove other status leads if any
      newLeads = newLeads.filter(lead => lead.status === 'NEW' || ( lead.status === 'FOLLOW_UP' && lead.followUpAt < timestamp ) ||( lead.status === 'SITE_VISIT' && lead.siteVisitAt < timestamp ) )
      
      return {
        ...state,
        data: newLeads,
      };
    case types.IS_TASK_SELECTED:
      //update lead
      let newTaskLeads = state.data.map((lead, index) => {
        if (lead.leadId === action.leadId) {
          lead.isSelected = action.isSelected;
        }
        return lead;
      });
      //Remove other status leads if any
      newTaskLeads = newTaskLeads.filter(lead => lead.status === 'NEW' || ( lead.status === 'FOLLOW_UP' && lead.followUpAt < timestamp ) ||( lead.status === 'SITE_VISIT' && lead.siteVisitAt < timestamp ) )
      
      return {
        ...state,
        data: newTaskLeads,
      };
    default:
      return state;
  }
}