export const getToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => data.token);

export const getQuestions = () => (
    getToken().then(token => 
    fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
        .then((response) => response.json())
        .then((questions) => questions.results))
)
