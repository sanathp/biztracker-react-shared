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
      propertyId
      groupId
      name
      propertyType
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
      propertyId
      groupId
      name
      propertyType
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
      propertyId
      groupId
      name
      propertyType
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
      propertyId
      type
      requestedBy
      status
      approvedBy
      rejectedBy
      authorizedBy
      requestComment
      rejectComment
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
      propertyId
      type
      requestedBy
      status
      approvedBy
      rejectedBy
      authorizedBy
      requestComment
      rejectComment
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
      propertyId
      type
      requestedBy
      status
      approvedBy
      rejectedBy
      authorizedBy
      requestComment
      rejectComment
      createdAt
      updatedAt
    }
  }
`;
export const createRequestActivity = /* GraphQL */ `
  mutation CreateRequestActivity(
    $input: CreateRequestActivityInput!
    $condition: ModelRequestActivityConditionInput
  ) {
    createRequestActivity(input: $input, condition: $condition) {
      projectId
      clientId
      requestId
      created
      type
      description
      activityBy
      createdAt
      updatedAt
    }
  }
`;
export const updateRequestActivity = /* GraphQL */ `
  mutation UpdateRequestActivity(
    $input: UpdateRequestActivityInput!
    $condition: ModelRequestActivityConditionInput
  ) {
    updateRequestActivity(input: $input, condition: $condition) {
      projectId
      clientId
      requestId
      created
      type
      description
      activityBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequestActivity = /* GraphQL */ `
  mutation DeleteRequestActivity(
    $input: DeleteRequestActivityInput!
    $condition: ModelRequestActivityConditionInput
  ) {
    deleteRequestActivity(input: $input, condition: $condition) {
      projectId
      clientId
      requestId
      created
      type
      description
      activityBy
      createdAt
      updatedAt
    }
  }
`;
export const createSale = /* GraphQL */ `
  mutation CreateSale(
    $input: CreateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    createSale(input: $input, condition: $condition) {
      clientId
      projectId
      saleId
      propertyId
      customerId
      customer {
        clientId
        projectId
        customerId
        name
        phoneNumber
        email
        propertyId
        saleId
        attachments {
          fileName
          fileType
          fileURL
          created
          uploadedBy
        }
        createdAt
        updatedAt
      }
      property {
        clientId
        projectId
        propertyId
        groupId
        name
        propertyType
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
      status
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSale = /* GraphQL */ `
  mutation UpdateSale(
    $input: UpdateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    updateSale(input: $input, condition: $condition) {
      clientId
      projectId
      saleId
      propertyId
      customerId
      customer {
        clientId
        projectId
        customerId
        name
        phoneNumber
        email
        propertyId
        saleId
        attachments {
          fileName
          fileType
          fileURL
          created
          uploadedBy
        }
        createdAt
        updatedAt
      }
      property {
        clientId
        projectId
        propertyId
        groupId
        name
        propertyType
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
      status
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSale = /* GraphQL */ `
  mutation DeleteSale(
    $input: DeleteSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    deleteSale(input: $input, condition: $condition) {
      clientId
      projectId
      saleId
      propertyId
      customerId
      customer {
        clientId
        projectId
        customerId
        name
        phoneNumber
        email
        propertyId
        saleId
        attachments {
          fileName
          fileType
          fileURL
          created
          uploadedBy
        }
        createdAt
        updatedAt
      }
      property {
        clientId
        projectId
        propertyId
        groupId
        name
        propertyType
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
      status
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      clientId
      projectId
      customerId
      name
      phoneNumber
      email
      propertyId
      saleId
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      clientId
      projectId
      customerId
      name
      phoneNumber
      email
      propertyId
      saleId
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      clientId
      projectId
      customerId
      name
      phoneNumber
      email
      propertyId
      saleId
      attachments {
        fileName
        fileType
        fileURL
        created
        uploadedBy
      }
      createdAt
      updatedAt
    }
  }
`;
