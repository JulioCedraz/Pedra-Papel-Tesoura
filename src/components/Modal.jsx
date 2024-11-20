import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
  });

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-4/5 md:w-1/3 p-6 relative">
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Regras do Jogo:</h2>
        <p>Escolha entre Pedra, Papel ou Tesoura.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Papel vence Pedra;</li>
          <li>Pedra vence Tesoura;</li>
          <li>Tesoura vence Papel.</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;