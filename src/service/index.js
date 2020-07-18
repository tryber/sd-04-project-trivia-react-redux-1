export const getToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => data.token);

export const getQuestions = (token) =>
  fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((questions) => questions.results);

export const shuffleAnswers = (correct, wrongs) => {
  const allAnswers = [...wrongs];
  allAnswers.push(correct);
  let m = allAnswers.length,
    t, //último elemento
    i; //index aleatório dos elementos restantes
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = allAnswers[m];
    allAnswers[m] = allAnswers[i];
    allAnswers[i] = t;
  }
  return allAnswers;
};

export const getCategorys = () =>
  fetch('https://opentdb.com/api_category.php')
  .then((response) => response.json())
  .then((data) => data.trivia_categories);
