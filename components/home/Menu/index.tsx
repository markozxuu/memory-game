import Link from 'next/link';

import s from './menu.module.css';

const Menu = () => {
  return (
    <div className={s.container}>
      <div>
        <Link className={s.btnStart} href="/memory-game">
          Starts the game
        </Link>

        <a
          className={s.btnSourceCode}
          rel="noopener noreferrer"
          href="https://github.com/markozxuu/challenge-justo"
          target="_blank"
        >
          Find out how it was made
        </a>
      </div>
    </div>
  );
};

export default Menu;
