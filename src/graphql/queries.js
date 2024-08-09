/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFormSubmission = /* GraphQL */ `
  query GetFormSubmission($id: ID!) {
    getFormSubmission(id: $id) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFormSubmissions = /* GraphQL */ `
  query ListFormSubmissions(
    $filter: ModelFormSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
