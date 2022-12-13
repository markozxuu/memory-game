import ClockIcon from '@components/icons/Clock';

import s from './timer.module.css';

interface TimerProps {
  minute: string | number;
  second: string | number;
}

const Timer = ({ minute, second }: TimerProps) => {
  return (
    <div className={s.root}>
      <span>
        <ClockIcon />
      </span>
      <p>
        {minute}:{second}
      </p>
    </div>
  );
};

export default Timer;
