// Components
import Menu from './Menu';
// Styles
import s from './home.module.css';

const Home = () => (
  <section className={s.root}>
    <h1 className={s.title}>
      Welcome to <span className={s.wave}>👋🏼</span>
      <span className={s.subtitle}>memory game</span>
    </h1>
    <Menu />
  </section>
);

export default Home;
