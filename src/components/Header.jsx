import './Header.css';

const Header = ({ nombre }) => {
  return (
    <div className="header__container">
      <h1 className="title">Hello {nombre}</h1>
      <h4 className="subtitle">Let's be productive today</h4>
    </div>
  );
};

export default Header;
