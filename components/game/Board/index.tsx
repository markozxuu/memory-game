'use client';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

// Components
import MemoBlock from '../MemoBlock';
import Timer from '../Controls/Timer';
import Moves from '../Controls/Moves';
import ResetButton from '../Controls/ResetButton';
import Score from '../Controls/Score';
// Styles
import s from './board.module.css';
// Utils
import { shufflingCards } from '@utils/shuffle';
// Hooks
import { useCountdown } from '@hooks/useCountdown';

type Card = {
  flipped: boolean;
  animal: string;
  index: number;
};

const Board = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const [moves, setMoves] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const { width, height } = useWindowSize();
  const { minute, second, setIsActive, setMinute, setSecond, setCounter } =
    useCountdown();

  useEffect(() => {
    const result = shufflingCards();
    setShuffledMemoBlocks(result);
  }, []);

  const resetGame = () => {
    const result = shufflingCards();
    setMoves(0);
    setScore(0);
    setMinute('00');
    setSecond('00');
    setCounter(0);
    setIsActive(false);
    setShuffledMemoBlocks(result);
  };

  const handleClick = (memoBlock: Card) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);

    setIsActive(true);

    if (selectedCard === null) {
      setMoves(moves + 1);
      return setSelectedCard(memoBlock);
    }

    if (selectedCard?.animal === memoBlock?.animal) {
      setScore(score + 1);
      return setSelectedCard(null);
    }

    setAnimating(true);
    return setTimeout(() => {
      shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
      shuffledMemoBlocksCopy.splice(selectedCard.index, 1, selectedCard);
      setShuffledMemoBlocks(shuffledMemoBlocksCopy);
      setSelectedCard(null);
      setAnimating(false);
    }, 1000);
  };

  console.log(score);
  return (
    <>
      {score >= 9 && <Confetti width={width} height={height} />}
      <div className={s['container-controls']}>
        <h1 className="text-white text-3xl text-center mb-4">Memory Game</h1>
        <div className="flex justify-center items-center space-x-8">
          <Timer minute={minute} second={second} />
          <Moves moves={moves} />
          <Score score={score} />
          <ResetButton handleClick={resetGame} />
        </div>
      </div>
      <main className={s.container}>
        {shuffledMemoBlocks.map((memoBlock, _index) => {
          return (
            <MemoBlock
              key={_index}
              animating={animating}
              handleClick={handleClick}
              memoBlock={memoBlock}
            />
          );
        })}
      </main>
    </>
  );
};

export default Board;
