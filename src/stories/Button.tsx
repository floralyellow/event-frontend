import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler;
  children: React.ReactNode;
}

export const Button = ( prop: ButtonProps ) => {
  return (
    <button
      type="button"
      className='text-white bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-blue-500  hover:to-cyan-500 px-3 py-2 rounded-md'
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
};
