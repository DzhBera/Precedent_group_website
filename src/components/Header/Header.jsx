import Navigation from "./Navigation.jsx";
import NavigationMobile from './NavigationMobile.jsx';
import clsx from "clsx";
import css from './header.module.css';

function Header () {
  
    return (
        <div className={css.container}>
      <header className={css.header}>
       
         <div className={css.logo}>
        
        {" "}
        <a href="/">Прецедент Групп</a>{" "}
    
        </div>
            <Navigation/>
      <NavigationMobile/>
     
      </header>
         </div>
         

    ) }
        
export default Header; 