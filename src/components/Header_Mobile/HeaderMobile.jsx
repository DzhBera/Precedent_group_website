import css from "./headermobile.module.css";
import clsx from "clsx";
import MobileIcon from "./../../assets/icons/menu_icon.svg";
import { Link } from 'react-router-dom';
function HeaderMobile() {
  return (
    <header className={css.header}>
    <div className={css.container}>
<div className={css.logo_container}>
     
<Link to="/">
     <span className={ css.logo}> Прецедент ГруппM</span> 
   </Link>

</div>

   <img className={css.mobile_icon} src={MobileIcon} alt="navigation icon" />
  
   
    </div>
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
</header>

  );
}
export default HeaderMobile;
