import React, { useEffect, useRef, useState } from "react";
import rockImage from "../assets/clipart-rock.png";
import paperImage from "../assets/clipart-paper.png";
import scissorsImage from "../assets/clipart-scissors.png";

const choices = [
  {
    name: "Pedra",
    icon: <img src={rockImage} alt="Pedra" className="w-16 h-16 mb-2" />,
  },
  {
    name: "Papel",
    icon: <img src={paperImage} alt="Papel" className="w-16 h-16 mb-2" />,
  },
  {
    name: "Tesoura",
    icon: <img src={scissorsImage} alt="Tesoura" className="w-16 h-16 mb-2" />,
  },
];

const Play = ({ onUserChoice }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const buttonsRef = useRef([]);

  // Efeito para focar no botão atual
  useEffect(() => {
    if (currentIndex >= 0) {
      buttonsRef.current[currentIndex]?.focus();
    }
  }, [currentIndex]);

  // Função para lidar com eventos de teclado
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % choices.length);
      event.preventDefault();
    } else if (event.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + choices.length) % choices.length);
      event.preventDefault();
    } else if (event.key === "Enter" || event.key === " ") {
      if (currentIndex >= 0) {
        buttonsRef.current[currentIndex].classList.add('scale-95');
        onUserChoice(choices[currentIndex].name);
        setTimeout(() => {
          buttonsRef.current[currentIndex].classList.remove('scale-95');
        }, 150);
      }
      event.preventDefault();
    }
  };

  return (
    <div 
      className="flex justify-center space-x-8 p-4" 
      onKeyDown={handleKeyDown} 
      tabIndex={0}
    >
      {choices.map(({ name, icon }, index) => (
        <button
          ref={(el) => (buttonsRef.current[index] = el)}
          className={`flex flex-col items-center px-4 py-2 rounded-md 
                      ${currentIndex === index ? 'bg-zinc-400 border-white font-bold' : 'bg-zinc-500 border-transparent'} 
                      text-white text-center shadow-md transition duration-200 
                      hover:border-white hover:bg-zinc-400 hover:font-bold`}
          key={name}
          onClick={() => onUserChoice(name)}
          onMouseEnter={() => setCurrentIndex(index)}
          onMouseLeave={() => setCurrentIndex(-1)}
          onMouseDown={(e) => e.currentTarget.classList.add('scale-95')}
          onMouseUp={(e) => e.currentTarget.classList.remove('scale-95')}
          tabIndex={0}
        >
          {icon}
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default Play;