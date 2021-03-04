import * as types from '../constants/actionTypes';
import { 
  getTasksErrorAction, 
  getTasksPendingAction, 
  getTasksSuccessAction
} from '../actions/tasksActions'
import { 
  searchLeadsErrorAction, 
  searchLeadsPendingAction, 
  searchLeadsSuccessAction,
  fetchMoreSearchLeadsSuccessAction,
  fetchMoreSearchLeadsPendingAction,
  fetchMoreSearchLeadsErrorAction
} from '../actions/searchLeadsActions'
import { API, graphqlOperation } from 'aws-amplify';
import {
  leadsByAssignedTo,
  leadsByAssignedToFollowUpAt,
  leadsByAssignedToUpdated,
  leadsByClientSorted, searchLeads, usersByClientId, listProjects, leadsByByProjectIdUpdated, getLead
} from '../graphql/queries';
import {
  getUsersPendingAction,
  getUsersSuccessAction,
  getUsersErrorAction
} from '../actions/usersActions';
import { getProjectsPendingAction, getProjectsSuccessAction, getProjectsErrorAction } from '../actions/projectsActions';
import { removeWhiteSpaces } from '../utils';

function filterDataByStatus(data) {
    let today = new Date(); 
    today.setHours(23, 59, 59, 999);
    let timestamp = Math.floor(today.getTime() / 1000);
    
    if (data) {
      let newData = data.filter((item) => {

        if (item.status == 'NEW') {
          return true;
        } else if (item.status == 'FOLLOW_UP') {
          if (item.followUpAt <= timestamp) {
            return true;
          }
        } else if (item.status == 'SITE_VISIT') {
          if (item.followUpAt <= timestamp) {
            return true;
          }
        } else if (item.status == 'SITE_VISIT_DONE') {
          if (item.followUpAt < timestamp) {
            return true;
          }
        }
        return false;
      });
  
      newData = newData.sort((a, b) => (a.updated > b.updated) ? -1 : 1);
      return newData;
    } 
  
    return [];
}
  
function isObjectEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

const middleware = store => dispatch => action => {
  dispatch(action);
  console.log(action.type);
  switch (action.type) {
    case types.GET_TASKS:
      if (!action.inBackground) {
        dispatch(getTasksPendingAction(action.status));
      }

      let today = new Date(); 
      today.setHours(23, 59, 59, 999);
      let timestamp = Math.floor(today.getTime() / 1000);
      if (action.status == '' || action.status == 'ALL') {
        API.graphql(graphqlOperation(leadsByAssignedToFollowUpAt, {
          assignedTo: action.userId,
          followUpAt: {
            between: [0, timestamp]
          },
          limit: 75
        })).then((response) => {
          console.log("leadsByAssignedToFollowUpAt", response);
          let data = response.data.LeadsByAssignedToFollowUpAt.items;
          let filteredData = filterDataByStatus(data);
          dispatch(getTasksSuccessAction(filteredData));
        }).catch((err) => {
          dispatch(getTasksErrorAction(err));
          console.warn(err);
        });
      } else {
        //TODO: improve this with pagination when user has more than 1000 active leads
        API.graphql(graphqlOperation(leadsByAssignedToFollowUpAt, {
          assignedTo: action.userId,
          followUpAt: {
            between: [0, timestamp]
          },
          filter: {
            status: {
              eq : action.status
            }
          },
          limit: 1000
        })).then((response) => {
          console.log("leadsByAssignedToFollowUpAt status", response);
          let data = response.data.LeadsByAssignedToFollowUpAt.items;
          dispatch(getTasksSuccessAction(data));
        }).catch((err) => {
          dispatch(getTasksErrorAction(err));
          console.warn(err);
        });
      }
      
      break; 
    case types.GET_USERS:
      dispatch(getUsersPendingAction());
      console.log("Action", action);
      API.graphql(graphqlOperation(usersByClientId, {
        clientId: action.clientId
      })).then((response) =>{
        console.log("usersByClientId", response);
        let data = response.data.usersByClientId.items;
        dispatch(getUsersSuccessAction(data));
      }).catch((err) => {
        dispatch(getUsersErrorAction(err));
        console.warn(err);
      });
      break; 
    case types.GET_PROJECTS:
        dispatch(getProjectsPendingAction());
        API.graphql(graphqlOperation(listProjects, {
          clientId: action.clientId,
          limit: 50
        })).then((response) =>{
          console.log("listProjects", response);
          let data = response.data.listProjects.items;
          dispatch(getProjectsSuccessAction(data));
        }).catch((err) => {
          dispatch(getProjectsErrorAction(err));
          console.warn(err);
        });
      break; 
    case types.SEARCH_LEADS_BY_NUMBER:
        dispatch(searchLeadsPendingAction());
        API.graphql(graphqlOperation(getLead, {
          clientId: action.clientId,
          phoneNumber: removeWhiteSpaces(action.phoneNumber)
        })).then((response) => {
          console.log("getLead", response);
          let item = response.data.getLead;
          if (item) {
            dispatch(searchLeadsSuccessAction([item]));
          } else {
            dispatch(searchLeadsSuccessAction([]));
          }
        }).catch((err) => {
          console.log("getLead Err", err);
          dispatch(searchLeadsErrorAction(err));
        });
        break;
    case types.SEARCH_LEADS:
        if (action.fetchMore) {
          dispatch(fetchMoreSearchLeadsPendingAction());
        } else {
          dispatch(searchLeadsPendingAction());
        }
        //TODO: have common constants for these
        if (action.filterByStatus == 'ALL') {
          action.filterByStatus = undefined;
        }
      
        if (action.filterBySource == 'ALL') {
          action.filterBySource = undefined;
        }
      
        if (action.filterByAssignedTo == 'ALL_USERS') {
          action.filterByAssignedTo = undefined;
        }
      
        if (action.filterByProjectId == 'ALL_PROJECTS') {
          action.filterByProjectId = undefined;
        }
        
        console.log("doing serach for ", action);
        if (action.filterByAssignedTo) {
          let filter = {};
          if (action.filterByStatus) {
            if (action.filterByStatus == 'DEAD_AFTER_SITE_VISIT') {
              filter.status = {
                eq: 'DEAD'
              };

              filter.siteVisitDoneAt = {
                gt: 10000
              };
            } else {
              filter.status = {
                eq: action.filterByStatus
              };
            }
          }

          if (action.filterBySource) {
            filter.source = {
              eq: action.filterBySource
            };
          }

          if (action.filterByProjectId) {
            filter.projectId = {
              eq: action.filterByProjectId
            };
          }
      
          if (isObjectEmpty(filter)) {
            filter = undefined;
          }

          let updated = {};
          if (action.fetchMore) {
            updated = {
              lt : action.lastItemUpdatedValue
            }
          } else {
            updated = undefined;
          }

          API.graphql(graphqlOperation(leadsByAssignedToUpdated, {
            assignedTo: action.filterByAssignedTo,
            updated: updated,
            filter: filter,
            limit: 1000
          })).then((response) => {
            //console.log("leadsByAssignedToUpdated", response);
            let data = response.data.LeadsByAssignedToUpdated.items;
            let count = response.data.LeadsByAssignedToUpdated.count;
            console.warn("Count is ", count);
            if (action.fetchMore) {
              dispatch(fetchMoreSearchLeadsSuccessAction(data));
            } else {
              dispatch(searchLeadsSuccessAction(data, count));
            }
          }).catch((err) => {
            console.log("leadsByAssignedToUpdated Err", err);
            if (action.fetchMore) {
              dispatch(fetchMoreSearchLeadsErrorAction(err));
            } else {
              dispatch(searchLeadsErrorAction(err));
            }
            console.warn(err);
          });

          return;
        } 

        if (action.filterByProjectId) {
          // add filter
          let filter = {};
          if (action.filterByStatus) {
            if (action.filterByStatus == 'DEAD_AFTER_SITE_VISIT') {
              filter.status = {
                eq: 'DEAD'
              };

              filter.siteVisitDoneAt = {
                gt: 10000
              };
            } else {
              filter.status = {
                eq: action.filterByStatus
              };
            }
          }

          if (action.filterBySource) {
            filter.source = {
              eq: action.filterBySource
            };
          }

          if (action.filterByAssignedTo) {
            filter.assignedTo = {
              eq: action.filterByAssignedTo
            };
          }

          if (isObjectEmpty(filter)) {
            filter = undefined;
          }
          let updated = {};
          if (action.fetchMore) {
            updated = {
              lt : action.lastItemUpdatedValue
            }
          } else {
            updated = undefined;
          }
          API.graphql(graphqlOperation(leadsByByProjectIdUpdated, {
            projectId: action.filterByProjectId,
            updated: updated,
            filter: filter,
            limit: 1000
          })).then((response) => {
            //console.log("leadsByByProjectIdUpdated", response);
            let data = response.data.LeadsByByProjectIdUpdated.items;
            let count = response.data.LeadsByByProjectIdUpdated.count;
            if (action.fetchMore) {
              dispatch(fetchMoreSearchLeadsSuccessAction(data));
            } else {
              dispatch(searchLeadsSuccessAction(data, count));
            }
          }).catch((err) => {
            console.warn("leadsByByProjectIdUpdated Err", err);
            if (action.fetchMore) {
              dispatch(fetchMoreSearchLeadsErrorAction(err));
            } else {
              dispatch(searchLeadsErrorAction(err));
            }
            console.warn(err);
          });
          return
        }
      break;
    default:
      break;
  }
}

export default middleware;