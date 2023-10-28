import { useEffect, useState } from 'react';
import dice from '../public/images/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='relative flex flex-col justify-center items-center bg-darkGrayishBlue sm:max-w-[65%] mx-auto p-8  rounded-lg'>
      <h3 className='text-neonGreen tracking-[5px] text-sm'>ADVICE #{advice.id}</h3>
      <blockquote className='text-lightCyan text-center text-[28px] mt-6'>
        &ldquo;{advice.advice}&rdquo;
      </blockquote>
      <img
        src='/public/images/pattern-divider-desktop.svg'
        alt='divider'
        className='mt-6'
      />
      <button
        onClick={fetchAdvice}
        className='flex items-center justify-center w-12 h-12 rounded-full bg-neonGreen absolute bottom-[-25px] mt-6'
      >
        <img src={dice} alt='dice' />
      </button>
    </div>
  );
}

export default App;
