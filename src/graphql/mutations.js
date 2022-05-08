/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
