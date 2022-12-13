import StartIcon from '@components/icons/Start';

import s from './score.module.css';

interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps) => (
  <div className={s.root}>
    <span>
      <StartIcon />
    </span>
    <p>{score}</p>
  </div>
);

export default Score;
