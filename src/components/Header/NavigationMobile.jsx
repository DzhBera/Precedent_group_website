import css from './header.module.css';
import  MobileIcon from "./../../assets/icons/menu_icon.svg";
function NavigationMobile () {
    return (
      <nav className={css.mobile}>
       <img
              src={MobileIcon}
             
              alt="mobile navigation icon"
            />
      </nav>
    )
}
export default NavigationMobile; 