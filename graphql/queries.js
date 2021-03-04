// eslint-disable
// this is an auto generated file. This will be overwritten

export const getClient = `query GetClient($email: String!) {
  getClient(email: $email) {
    email
    clientId
    name
    adminUserId
    created
    updated
  }
}
`;
export const listClients = `query ListClients(
  $email: String
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      email
      clientId
      name
      adminUserId
      created
      updated
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($email: String!) {
  getUser(email: $email) {
    email
    userId
    clientId
    isAdmin
    name
    expoPushToken
    projectId
    created
    updated
  }
}
`;
export const listUsers = `query ListUsers(
  $email: String
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      email
      userId
      clientId
      isAdmin
      name
      expoPushToken
      projectId
      created
      updated
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($clientId: String!, $projectId: ID!) {
  getProject(clientId: $clientId, projectId: $projectId) {
    clientId
    projectId
    name
    assignedTo
    created
    updated
    nameMatches
  }
}
`;
export const listProjects = `query ListProjects(
  $clientId: String
  $projectId: ModelIDKeyConditionInput
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(
    clientId: $clientId
    projectId: $projectId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      clientId
      projectId
      name
      assignedTo
      created
      updated
      nameMatches
    }
    nextToken
  }
}
`;
export const getLead = `query GetLead($clientId: String!, $phoneNumber: String!) {
  getLead(clientId: $clientId, phoneNumber: $phoneNumber) {
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
export const listLeads = `query ListLeads(
  $clientId: String
  $phoneNumber: ModelStringKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeads(
    clientId: $clientId
    phoneNumber: $phoneNumber
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const getActivity = `query GetActivity($leadId: String!, $created: Int!) {
  getActivity(leadId: $leadId, created: $created) {
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
export const listActivitys = `query ListActivitys(
  $leadId: String
  $created: ModelIntKeyConditionInput
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivitys(
    leadId: $leadId
    created: $created
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getReport = `query GetReport($itemId: String!, $rangeKey: String!) {
  getReport(itemId: $itemId, rangeKey: $rangeKey) {
    itemId
    rangeKey
    type
    data
    clientId
    created
    updated
  }
}
`;
export const listReports = `query ListReports(
  $itemId: String
  $rangeKey: ModelStringKeyConditionInput
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(
    itemId: $itemId
    rangeKey: $rangeKey
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      itemId
      rangeKey
      type
      data
      clientId
      created
      updated
    }
    nextToken
  }
}
`;
export const usersByClientId = `query UsersByClientId(
  $clientId: String
  $userId: ModelIDKeyConditionInput
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByClientId(
    clientId: $clientId
    userId: $userId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      email
      userId
      clientId
      isAdmin
      name
      expoPushToken
      projectId
      created
      updated
    }
    nextToken
  }
}
`;
export const byProjectId = `query ByProjectId(
  $projectId: ID
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  ByProjectId(
    projectId: $projectId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      clientId
      projectId
      name
      assignedTo
      created
      updated
      nameMatches
    }
    nextToken
  }
}
`;
export const leadsByAssignedTo = `query LeadsByAssignedTo(
  $assignedTo: String
  $created: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByAssignedTo(
    assignedTo: $assignedTo
    created: $created
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByAssignedToFollowUpAt = `query LeadsByAssignedToFollowUpAt(
  $assignedTo: String
  $followUpAt: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByAssignedToFollowUpAt(
    assignedTo: $assignedTo
    followUpAt: $followUpAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByAssignedToTaskSortKey = `query LeadsByAssignedToTaskSortKey(
  $assignedTo: String
  $taskSortKey: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByAssignedToTaskSortKey(
    assignedTo: $assignedTo
    taskSortKey: $taskSortKey
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByAssignedToUpdated = `query LeadsByAssignedToUpdated(
  $assignedTo: String
  $updated: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByAssignedToUpdated(
    assignedTo: $assignedTo
    updated: $updated
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByByProjectIdUpdated = `query LeadsByByProjectIdUpdated(
  $projectId: String
  $updated: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByByProjectIdUpdated(
    projectId: $projectId
    updated: $updated
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByProjectIdCreated = `query LeadsByProjectIdCreated(
  $projectId: String
  $created: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByProjectIdCreated(
    projectId: $projectId
    created: $created
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const leadsByClientSorted = `query LeadsByClientSorted(
  $clientId: String
  $created: ModelIntKeyConditionInput
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  LeadsByClientSorted(
    clientId: $clientId
    created: $created
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    count
  }
}
`;
export const activitiesByClientId = `query ActivitiesByClientId(
  $clientId: String
  $created: ModelIntKeyConditionInput
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  activitiesByClientId(
    clientId: $clientId
    created: $created
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
