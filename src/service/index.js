const getToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) =>
      fetch(`https://opentdb.com/api.php?amount=5&token=${data.token}`)
        .then((response) => response.json())
        .then((questions) => questions.results),
    );

export default getToken;
