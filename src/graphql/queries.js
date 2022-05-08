/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      time_left
      chosen_number
      total
      chosen {
        id
        question_id
        content
        is_true
        createdAt
        updatedAt
      }
      type
      questions {
        items {
          id
          set_id
          content
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time_left
        chosen_number
        total
        chosen {
          id
          question_id
          content
          is_true
          createdAt
          updatedAt
        }
        type
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      set_id
      content
      image
      answers {
        id
        question_id
        content
        is_true
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        set_id
        content
        image
        answers {
          id
          question_id
          content
          is_true
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question_id
        content
        is_true
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
