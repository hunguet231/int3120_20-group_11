export const getAnswerOrder = (answers) => {
  let result;
  answers.map((answer, index) => {
    if (answer.is_true) result = index + 1;
  });
  return result;
};
