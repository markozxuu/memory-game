import Link from 'next/link';

import s from './menu.module.css';

const Menu = () => {
  return (
    <div className={s.container}>
      <div>
        <Link className={s.btnStart} href="/memory-game">
          Start
        </Link>
        <a
          className={s.btnSourceCode}
          rel="noopener noreferrer"
          href="https://www.markozxuu.com/"
          target="_blank"
        >
          Source code
        </a>
      </div>
    </div>
  );
};

export default Menu;
