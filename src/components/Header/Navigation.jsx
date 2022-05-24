import css from "./header.module.css";

function Navigation() {
  return (
    <nav className={css.navigation} >
      <ul className={css.links}>
      <li>  <a href="#">О компании</a></li>
      <li>  <a href="#">Специализации</a></li>
      <li><a href="#"> Услуги</a></li>
      <li>      <a href="#">Юристы</a></li>
      <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  );
}
export default Navigation;
