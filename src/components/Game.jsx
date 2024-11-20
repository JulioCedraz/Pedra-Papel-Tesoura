import React from 'react';

const Game = ({ userChoice, computerChoice, result }) => {
  return (
    <div className='bg-zinc-500 text-white min-w-[270px] p-4 space-y-2 rounded-lg shadow-md'>
      <h2>Sua escolha: <strong>{userChoice}</strong></h2>
      <h2>Escolha do computador: <strong>{computerChoice}</strong></h2>
      <h2>Resultado: <strong>{result}</strong></h2>
    </div>
  );
};

export default Game;