import { useEffect, useState } from 'react';

const useCountdown = () => {
  const [second, setSecond] = useState<string | number>('00');
  const [minute, setMinute] = useState<string | number>('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId: any;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter, setIsActive]);
  return {
    second,
    minute,
    setSecond,
    setMinute,
    setIsActive,
    setCounter,
  };
};

export { useCountdown };
