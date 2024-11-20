import { useState } from "react";
import Header from "./components/Header.jsx";
import Play from "./components/Play.jsx";
import Game from "./components/Game.jsx";
import Rules from "./components/Rules.jsx";
import Modal from "./components/Modal.jsx";
import Footer from "./components/Footer.jsx";

const choices = ["Pedra", "Papel", "Tesoura"];

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserChoice = (choice) => {
    const computerRandomChoice = ['Pedra', 'Papel', 'Tesoura'][Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Empate');
      setDrawScore(drawScore + 1);
    } else if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      setResult('Você ganhou!');
      setUserScore(userScore + 1);
    } else {
      setResult('Você perdeu...');
      setComputerScore(computerScore + 1);
    }
  };

   const getResultClass = () => {
    if (result === 'Você ganhou!') return 'text-green-500';
    if (result === 'Você perdeu...') return 'text-red-800';
    return 'text-white';
  };

  return (
    <div className="bg-zinc-700 min-h-screen flex flex-col items-center p-4 space-y-2">
      <Header userScore={userScore} computerScore={computerScore} drawScore={drawScore} />
      <Play onUserChoice={handleUserChoice} />
      <Game userChoice={userChoice} computerChoice={computerChoice} result={<span className={getResultClass()}>{result}</span>} />
      <Rules onShowRules={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer></Footer>
    </div>
  );
}

export default App;
