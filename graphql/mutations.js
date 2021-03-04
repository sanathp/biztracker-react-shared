// eslint-disable
// this is an auto generated file. This will be overwritten

export const createLead = `mutation CreateLead($input: CreateLeadInput!) {
  createLead(input: $input) {
    clientId
    phoneNumber
    leadId
    email
    name
    status
    source
    assignedTo
    message
    followUpAt
    taskSortKey
    siteVisitAt
    siteVisitDoneAt
    lastStatusUpdatedAt
    projectId
    created
    updated
  }
}
`;
export const updateLead = `mutation UpdateLead($input: UpdateLeadInput!) {
  updateLead(input: $input) {
    clientId
    phoneNumber
    leadId
    email
    name
    status
    source
    assignedTo
    message
    followUpAt
    taskSortKey
    siteVisitAt
    siteVisitDoneAt
    lastStatusUpdatedAt
    projectId
    created
    updated
  }
}
`;
export const deleteLead = `mutation DeleteLead($input: DeleteLeadInput!) {
  deleteLead(input: $input) {
    clientId
    phoneNumber
    leadId
    email
    name
    status
    source
    assignedTo
    message
    followUpAt
    taskSortKey
    siteVisitAt
    siteVisitDoneAt
    lastStatusUpdatedAt
    projectId
    created
    updated
  }
}
`;
export const createActivity = `mutation CreateActivity($input: CreateActivityInput!) {
  createActivity(input: $input) {
    leadId
    created
    userId
    clientId
    action
    fromState
    toState
    title
    description
    updated
  }
}
`;
export const updateActivity = `mutation UpdateActivity($input: UpdateActivityInput!) {
  updateActivity(input: $input) {
    leadId
    created
    userId
    clientId
    action
    fromState
    toState
    title
    description
    updated
  }
}
`;
export const deleteActivity = `mutation DeleteActivity($input: DeleteActivityInput!) {
  deleteActivity(input: $input) {
    leadId
    created
    userId
    clientId
    action
    fromState
    toState
    title
    description
    updated
  }
}
`;
