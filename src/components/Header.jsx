import React from "react";

const Header = ({ userScore, computerScore, drawScore }) => {
  return (
    <header className="bg-zinc-500 text-white text-center p-4 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold pb-8">Pedra, Papel e Tesoura</h1>
      <h2 className="text-2xl font-bold pb-2">Pontuação:</h2>
      <div className="flex justify-between">
      <p className="text-xl text-left">Você: {userScore}</p>
      <p className="text-xl text-right">Computador: {computerScore}</p>
      <p className="text-center text-xl">Empates: {drawScore}</p>
      </div>
    </header>
  );
};

export default Header;
