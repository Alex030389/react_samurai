import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <img width='50' height='50' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="img"/>
    </header>
  );
};

export default Header;