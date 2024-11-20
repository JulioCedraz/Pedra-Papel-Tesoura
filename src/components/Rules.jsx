import React from 'react';

const Rules = ({ onShowRules }) => {
  return (
    <div className='p-4'>
      <button className='rounded-md border-2 border-transparent px-4 py-2 bg-zinc-800 text-white hover:border-white' onClick={onShowRules}>Regras</button>
    </div>
  );
};

export default Rules;