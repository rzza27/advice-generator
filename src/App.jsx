/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import dice from '../public/images/icon-dice.svg';
import divider from '../public/images/pattern-divider-desktop.svg';
import loaderGif from '../public/Rolling-1s-200px.gif'

function App() {
  const [advice, setAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setAdvice(data.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='relative flex flex-col justify-center items-center bg-darkGrayishBlue min-w-[250px] sm:max-w-[65%] mx-auto p-8  rounded-lg'>
      {isLoading ? (
        <Loader />
      ) : (
        <Advice advice={advice} fetchAdvice={fetchAdvice} />
      )}
    </div>
  );
}

function Advice({ advice, fetchAdvice }) {
  return (
   <>
      <h3 className='text-neonGreen tracking-[5px] text-sm'>
        ADVICE #{advice.id}
      </h3>
      <blockquote className='text-lightCyan text-center text-[28px] mt-6'>
        &ldquo;{advice.advice}&rdquo;
      </blockquote>
      <img src={divider} alt='divider' className='mt-6' />
      <button
        onClick={fetchAdvice}
        className='flex items-center justify-center w-12 h-12 rounded-full bg-neonGreen absolute bottom-[-25px] mt-6'
      >
        <img src={dice} alt='dice' />
      </button>
    </>
  );
}

function Loader() {
  return (
    <div>
      <img className='w-20' src={loaderGif} alt="loading image" />
    </div>
  );
}

export default App;
