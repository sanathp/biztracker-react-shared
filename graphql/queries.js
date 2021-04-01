/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($email: String!) {
    getClient(email: $email) {
      email
      clientId
      name
      adminUserId
      config
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $email: String
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClients(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        clientId
        name
        adminUserId
        config
        created
        updated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      userId
      clientId
      isAdmin
      isMusugu
      name
      expoPushToken
      projectId
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        userId
        clientId
        isAdmin
        isMusugu
        name
        expoPushToken
        projectId
        created
        updated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($clientId: String!, $projectId: ID!) {
    getProject(clientId: $clientId, projectId: $projectId) {
      clientId
      projectId
      name
      assignedTo
      created
      updated
      nameMatches
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $clientId: String
    $projectId: ModelIDKeyConditionInput
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      clientId: $clientId
      projectId: $projectId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        clientId
        projectId
        name
        assignedTo
        created
        updated
        nameMatches
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLead = /* GraphQL */ `
  query GetLead($clientId: String!, $phoneNumber: String!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listLeads = /* GraphQL */ `
  query ListLeads(
    $clientId: String
    $phoneNumber: ModelStringKeyConditionInput
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLeads(
      clientId: $clientId
      phoneNumber: $phoneNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($leadId: String!, $created: Int!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $leadId: String
    $created: ModelIntKeyConditionInput
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActivitys(
      leadId: $leadId
      created: $created
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($itemId: String!, $rangeKey: String!) {
    getReport(itemId: $itemId, rangeKey: $rangeKey) {
      itemId
      rangeKey
      type
      data
      clientId
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $itemId: String
    $rangeKey: ModelStringKeyConditionInput
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReports(
      itemId: $itemId
      rangeKey: $rangeKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        itemId
        rangeKey
        type
        data
        clientId
        created
        updated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByClientId = /* GraphQL */ `
  query UsersByClientId(
    $clientId: String
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByClientId(
      clientId: $clientId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        userId
        clientId
        isAdmin
        isMusugu
        name
        expoPushToken
        projectId
        created
        updated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byProjectId = /* GraphQL */ `
  query ByProjectId(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const leadsByAssignedTo = /* GraphQL */ `
  query LeadsByAssignedTo(
    $assignedTo: String
    $created: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByAssignedTo(
      assignedTo: $assignedTo
      created: $created
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByAssignedToFollowUpAt = /* GraphQL */ `
  query LeadsByAssignedToFollowUpAt(
    $assignedTo: String
    $followUpAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByAssignedToFollowUpAt(
      assignedTo: $assignedTo
      followUpAt: $followUpAt
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByAssignedToTaskSortKey = /* GraphQL */ `
  query LeadsByAssignedToTaskSortKey(
    $assignedTo: String
    $taskSortKey: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByAssignedToTaskSortKey(
      assignedTo: $assignedTo
      taskSortKey: $taskSortKey
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByAssignedToUpdated = /* GraphQL */ `
  query LeadsByAssignedToUpdated(
    $assignedTo: String
    $updated: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByAssignedToUpdated(
      assignedTo: $assignedTo
      updated: $updated
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByByProjectIdUpdated = /* GraphQL */ `
  query LeadsByByProjectIdUpdated(
    $projectId: String
    $updated: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByByProjectIdUpdated(
      projectId: $projectId
      updated: $updated
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByProjectIdCreated = /* GraphQL */ `
  query LeadsByProjectIdCreated(
    $projectId: String
    $created: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByProjectIdCreated(
      projectId: $projectId
      created: $created
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const leadsByClientSorted = /* GraphQL */ `
  query LeadsByClientSorted(
    $clientId: String
    $created: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LeadsByClientSorted(
      clientId: $clientId
      created: $created
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
      count
    }
  }
`;
export const activitiesByClientId = /* GraphQL */ `
  query ActivitiesByClientId(
    $clientId: String
    $created: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activitiesByClientId(
      clientId: $clientId
      created: $created
      sortDirection: $sortDirection
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
