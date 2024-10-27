import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['<Web developer/>','Programmer++', 'Learner', 'UI/UX Designer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="inline-flex items-center">
      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan to-blue  bg-clip-text text-transparent">{text}</span>
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default TypingEffect;