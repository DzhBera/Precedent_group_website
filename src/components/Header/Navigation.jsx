import css from "./header.module.css";

function Navigation() {
  return (
    <nav className={css.navigation} >
      <a href="#"> О компании</a>
      <a href="#">Специализации</a>
      <a href="#"> Услуги</a>
      <a href="#">Юристы</a>
      <a href="#">Контакты</a>
    </nav>
  );
}
export default Navigation;
