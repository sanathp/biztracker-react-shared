// import * as types from '../constants/actionTypes';
// import { 
//   getTasksErrorAction, 
//   getTasksPendingAction, 
//   getTasksSuccessAction
// } from '../actions/tasksActions'
// import { 
//   searchLeadsErrorAction, 
//   searchLeadsPendingAction, 
//   searchLeadsSuccessAction
// } from '../actions/searchLeadsActions'
// import { API, graphqlOperation } from 'aws-amplify';
// import { leadsByAssignedTo, leadsByClientSorted, searchLeads, usersByClientId, listProjects }  from '../graphql/queries';
// import {
//   getUsersPendingAction,
//   getUsersSuccessAction,
//   getUsersErrorAction
// } from '../actions/usersActions';
// import { getProjectsPendingAction, getProjectsSuccessAction, getProjectsErrorAction } from '../actions/projectsActions';
// import moment from 'moment';

// function getTasksFromDynamoDb(dispatch, action) {
//   console.log("action is");
//   console.log(action);

//   if (action.userId == 'ALL') {
//     API.graphql(graphqlOperation(leadsByClientSorted, {
//       clientId: action.clientId,
//       limit: 300
//     })).then((response) => {
//       console.log("leadsByClientSorted", response);
//       let data = response.data.LeadsByClientSorted.items;
//       let filteredData = filterDataByStatus(data);
//       dispatch(getTasksSuccessAction(filteredData));
//     }).catch((err) => {
//       dispatch(getTasksErrorAction(err));
//       console.log(err);
//     });
//   } else {
//     API.graphql(graphqlOperation(leadsByAssignedTo, {
//       assignedTo: action.userId,
//       limit: 300
//     })).then((response) => {
//       console.log("leadsByAssignedTo", response);
//       let data = response.data.LeadsByAssignedTo.items;
//       let filteredData = filterDataByStatus(data);
//       dispatch(getTasksSuccessAction(filteredData));
//     }).catch((err) => {
//       dispatch(getTasksErrorAction(err));
//       console.log(err);
//     });
//   }
// }

// function filterDataByStatus(data) {
//   let today = new Date(); 
//   today.setHours(23, 59, 59, 999);
//   let timestamp = Math.floor(today.getTime() / 1000);
  
//   if (data) {
//     let newData = data.filter((item) => {
//       //Index by userId and some other key or use followUp key at may be to sort the tasks by userId
//       //For search add more filters and pagination, remove local search
//       //TODO:
//       if (item.status == 'NEW') {
//         return true;
//       } else if (item.status == 'FOLLOW_UP') {
//         if (item.followUpAt <= timestamp) {
//           return true;
//         }
//       } else if (item.status == 'SITE_VISIT') {
//         if (item.siteVisitAt <= timestamp) {
//           return true;
//         }
//       } else if (item.status == 'SITE_VISIT_DONE') {
//         if (item.followUpAt < timestamp) {
//           return true;
//         }
//       }
//       return false;
//     });

//     newData = newData.sort((a, b) => (a.updated > b.updated) ? -1 : 1);
//     return newData;
//   } 

//   return [];
// }

// const middleware = store => dispatch => action => {
//   dispatch(action);
//   console.log(action.type);
//   switch (action.type) {
//     case types.GET_TASKS:
//       if (!action.inBackground) {
//         dispatch(getTasksPendingAction(action.status));
//       }

//       if (true) {
//         getTasksFromDynamoDb(dispatch, action);
//         return;
//       }
//       /*
//       API.graphql(graphqlOperation(leadsByAssignedTo, {
//         assignedTo: action.userId,
//         limit: 50
//       })).then((response) =>{
//         let data = response.data.LeadsByAssignedTo.items;
//         console.log(response);
//         dispatch(getTasksSuccessAction(data));
//       }).catch((err) => {
//         dispatch(getTasksErrorAction(err));
//         console.log(err);
//       });
//       */


//       let filter = {
//         assignedTo:{
//           eq: action.userId
//         }
//       };

//       //TODO: big bug client id not being passed

//       if (action.userId == 'ALL') {
//         filter = {
//           clientId :{ 
//             eq: action.clientId
//           }
//         };
//       }

//       let today = new Date(); 
//       today.setHours(23, 59, 59, 999);
//       let timestamp = Math.floor(today.getTime() / 1000);
//       moment().startOf('day');
//       console.log(timestamp, "is timestamp", action.status);
//       if (action.status == 'NEW') {
//         filter.and = [{
//           status: {
//             eq: 'NEW'
//           }
//         }];
//       } else if (action.status == 'FOLLOW_UP') {
//         filter.and = [{
//           followUpAt: {
//             lte: timestamp
//           },
//           and: {
//             status: {
//               eq: 'FOLLOW_UP'
//             }
//           }
//         }];
//       } else if (action.status == 'SITE_VISIT') {
//         filter.and = [{
//           siteVisitAt: {
//             lte: timestamp
//           },
//           and: {
//             status: {
//               eq: action.status
//             }
//           }
//         }];
      
//       } else if (action.status == 'SITE_VISIT_DONE') {
//         filter.and = [{
//           followUpAt: {
//             lte: timestamp
//           },
//           and: {
//             status: {
//               eq: action.status
//             }
//           }
//         }];
//       } else {
//         filter.or = [
//           {
//             followUpAt: {
//               lte: timestamp
//             },
//             and: {
//               status: {
//                 eq: "FOLLOW_UP"
//               }
//             }
//           },
//           {
//             followUpAt: {
//               lte: timestamp
//             },
//             and: {
//               status: {
//                 eq: "SITE_VISIT_DONE"
//               }
//             }
//           },
//           {
//             siteVisitAt: {
//               lte: timestamp
//             },
//             and: {
//               status: {
//                 eq: "SITE_VISIT"
//               }
//             }
//           },
//           {
//             status: {
//               eq: "NEW"
//             }
//           },
//         ];
//       }

//       //TODO: what if there are already 50+ in follow up , site visit will not be shown
//       //site visit should always be shown ??? conlficts with drowndown ?
//       API.graphql(graphqlOperation(searchLeads, {
//         filter: filter,
//         sort: {
//           field: "updated",
//           direction: "desc"
//         },
//         limit: 75
//       })).then((response) =>{
//         let data = response.data.searchLeads.items;
//         dispatch(getTasksSuccessAction(data, action.status));
//       }).catch((err) => {
//         if (!action.inBackground) {
//           dispatch(getTasksErrorAction(err, action.status));
//         }
//         console.log(err);
//       });
//       break; 
//     case types.GET_USERS:
//       dispatch(getUsersPendingAction());
//       console.log("Action", action);
//       API.graphql(graphqlOperation(usersByClientId, {
//         clientId: action.clientId
//       })).then((response) =>{
//         console.log("usersByClientId", response);
//         let data = response.data.usersByClientId.items;
//         dispatch(getUsersSuccessAction(data));
//       }).catch((err) => {
//         dispatch(getUsersErrorAction(err));
//         console.log(err);
//       });
//       break; 
//     case types.GET_PROJECTS:
//         dispatch(getProjectsPendingAction());
//         API.graphql(graphqlOperation(listProjects, {
//           clientId: action.clientId,
//           limit: 50
//         })).then((response) =>{
//           console.log("listProjects", response);
//           let data = response.data.listProjects.items;
//           dispatch(getProjectsSuccessAction(data));
//         }).catch((err) => {
//           dispatch(getProjectsErrorAction(err));
//           console.log(err);
//         });
//         break; 
//     case types.SEARCH_LEADS:
//         dispatch(searchLeadsPendingAction());
//         let sfilter = {
//             clientId: {
//               eq: action.clientId
//             },
//             assignedTo:{
//               eq: action.userId
//             }
//         };
      
//         if (action.isAdmin) {
//           //If admin remove assigned to
//           sfilter = {
//             clientId: {
//               eq: action.clientId
//             }
//           };
//         }
//         //TODO: add date filter 
//         if (action.leadFilterStatus != 'ALL') {
//           sfilter.status = {
//             eq: action.leadFilterStatus
//           }
//         }
//         let searchString = action.searchString ?  action.searchString.toLowerCase() : '';

//         let searchObj = {
//           wildcard: '*'+searchString+'*'
//         };
      
//         let nameSearchObj = {
//           matchPhrase: searchString
//         };

//         sfilter.or = [
//           {
//             email: searchObj
//           },
//           {
//             name: nameSearchObj
//           },
//           {
//             source: searchObj
//           },
//           {
//             phoneNumber: searchObj
//           },
//         ];

//         API.graphql(graphqlOperation(leadsByClientSorted, {
//           clientId: action.clientId,
//           limit: 70
//         })).then((response) => {
//           console.log("leadsByClientSorted", response);
//           let data = response.data.LeadsByClientSorted.items;
//           dispatch(searchLeadsSuccessAction(data));
//         }).catch((err) => {
//           dispatch(searchLeadsErrorAction(err));
//           console.log(err);
//         });
      
//         // API.graphql(graphqlOperation(searchLeads, {
//         //   filter: sfilter,
//         //   sort: {
//         //     field: "updated",
//         //     direction: "desc"
//         //   },
//         //   limit: 50
//         // })).then((response) =>{
//         //   let data = response.data.searchLeads.items;
//         //   console.log(response);
//         //   dispatch(searchLeadsSuccessAction(data));
//         // }).catch((err) => {
//         //   dispatch(searchLeadsErrorAction(err));
//         //   console.log(err);
//         // });
//       break;
//     default:
//       break;
//   }
// }

// export default middleware;