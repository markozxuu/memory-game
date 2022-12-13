'use client';

import Image from 'next/image';
import s from './memoBlock.module.css';

interface MemoBlockProps {
  memoBlock: any;
  animating: boolean;
  handleClick: any;
}

const MemoBlock = ({ memoBlock, animating, handleClick }: MemoBlockProps) => {
  return (
    <div
      className={s['memo-block']}
      onClick={() => !memoBlock.flipped && !animating && handleClick(memoBlock)}
    >
      <div
        className={`${s['memo-block-inner']} ${
          memoBlock.flipped && `${s['memo-block-flipped']}`
        }`}
      >
        <div className={s['memo-block-front']}>
          <Image
            width={110}
            height={110}
            src="/assets/cover.png"
            className={s.demooo}
            alt="foto frontal de carta"
          />
        </div>
        <div className={s['memo-block-back']}>
          <Image
            width={110}
            height={110}
            src={memoBlock.animal}
            className={s.demooo}
            alt="foto del reverso"
          />
        </div>
      </div>
    </div>
  );
};

export default MemoBlock;
