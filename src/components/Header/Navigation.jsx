import { Link } from 'react-router-dom';
import css from "./header.module.css";

function Navigation() {
  return (
    <nav className={css.navigation} >
      <ul className={css.links}>
      <Link to="/About">
      <li>  <a href="#">О компании</a></li>
        </Link>
     
        <Link to="/Specializations">
      <li>  <a href="#">Специализации</a></li>
        </Link>
        <Link to="/Services">
      <li>  <a href="#">Услуги</a></li>
        </Link>
        <Link to="/Lawyers">
      <li>  <a href="#">Юристы</a></li>
        </Link>
        <Link to="/Contacts">
      <li>  <a href="#">Контакты</a></li>
        </Link>
      </ul>
    </nav>
  );
}
export default Navigation;
