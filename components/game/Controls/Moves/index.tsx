import CardIcon from '@components/icons/Card';

import s from './moves.module.css';

interface MovesProps {
  moves: number;
}

const Moves = ({ moves }: MovesProps) => (
  <div className={s.root}>
    <span>
      <CardIcon />
    </span>
    <p>{moves}</p>
  </div>
);

export default Moves;
