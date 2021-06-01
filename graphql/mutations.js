/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLead = /* GraphQL */ `
  mutation CreateLead(
    $input: CreateLeadInput!
    $condition: ModelLeadConditionInput
  ) {
    createLead(input: $input, condition: $condition) {
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
export const updateLead = /* GraphQL */ `
  mutation UpdateLead(
    $input: UpdateLeadInput!
    $condition: ModelLeadConditionInput
  ) {
    updateLead(input: $input, condition: $condition) {
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
export const deleteLead = /* GraphQL */ `
  mutation DeleteLead(
    $input: DeleteLeadInput!
    $condition: ModelLeadConditionInput
  ) {
    deleteLead(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createStatusChangeRequest = /* GraphQL */ `
  mutation CreateStatusChangeRequest(
    $input: CreateStatusChangeRequestInput!
    $condition: ModelStatusChangeRequestConditionInput
  ) {
    createStatusChangeRequest(input: $input, condition: $condition) {
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
export const updateStatusChangeRequest = /* GraphQL */ `
  mutation UpdateStatusChangeRequest(
    $input: UpdateStatusChangeRequestInput!
    $condition: ModelStatusChangeRequestConditionInput
  ) {
    updateStatusChangeRequest(input: $input, condition: $condition) {
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
export const deleteStatusChangeRequest = /* GraphQL */ `
  mutation DeleteStatusChangeRequest(
    $input: DeleteStatusChangeRequestInput!
    $condition: ModelStatusChangeRequestConditionInput
  ) {
    deleteStatusChangeRequest(input: $input, condition: $condition) {
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
