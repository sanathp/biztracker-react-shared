// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateLead = `subscription OnCreateLead {
  onCreateLead {
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
export const onUpdateLead = `subscription OnUpdateLead {
  onUpdateLead {
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
export const onDeleteLead = `subscription OnDeleteLead {
  onDeleteLead {
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
export const onCreateActivity = `subscription OnCreateActivity {
  onCreateActivity {
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
export const onUpdateActivity = `subscription OnUpdateActivity {
  onUpdateActivity {
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
export const onDeleteActivity = `subscription OnDeleteActivity {
  onDeleteActivity {
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
