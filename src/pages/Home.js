import React from 'react';

const Home = () => {
  return (
    <form>
      <label>
        Digite seu nome:
        <input type="text" data-testid="input-player-name" required />
      </label>
      <label>
        Digite seu E-mail:
        <input type="text" data-testid="input-gravatar-email" required />
      </label>
      <button data-testid="btn-play">JOGAR</button>
    </form>
  );
};

export default Home;
