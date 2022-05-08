/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      question_id
      content
      is_true
      createdAt
      updatedAt
    }
  }
`;
