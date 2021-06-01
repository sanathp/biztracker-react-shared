/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLead = /* GraphQL */ `
  subscription OnCreateLead {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLead = /* GraphQL */ `
  subscription OnUpdateLead {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLead = /* GraphQL */ `
  subscription OnDeleteLead {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
      clientId
      projectId
      itemId
      groupId
      propertyId
      propertyType
      name
      description
      status
      dimensions
      unitOfArea
      size
      pricePerUnit
      premiums
      planImageURL
      assignedTo
      soldBy
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
      clientId
      projectId
      itemId
      groupId
      propertyId
      propertyType
      name
      description
      status
      dimensions
      unitOfArea
      size
      pricePerUnit
      premiums
      planImageURL
      assignedTo
      soldBy
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
      clientId
      projectId
      itemId
      groupId
      propertyId
      propertyType
      name
      description
      status
      dimensions
      unitOfArea
      size
      pricePerUnit
      premiums
      planImageURL
      assignedTo
      soldBy
      created
      updated
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStatusChangeRequest = /* GraphQL */ `
  subscription OnCreateStatusChangeRequest {
    onCreateStatusChangeRequest {
      clientId
      projectId
      requestId
      propertyItemId
      type
      requestedBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStatusChangeRequest = /* GraphQL */ `
  subscription OnUpdateStatusChangeRequest {
    onUpdateStatusChangeRequest {
      clientId
      projectId
      requestId
      propertyItemId
      type
      requestedBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStatusChangeRequest = /* GraphQL */ `
  subscription OnDeleteStatusChangeRequest {
    onDeleteStatusChangeRequest {
      clientId
      projectId
      requestId
      propertyItemId
      type
      requestedBy
      createdAt
      updatedAt
    }
  }
`;
