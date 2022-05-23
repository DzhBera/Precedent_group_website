import Navigation from "./Navigation.jsx";
import NavigationMobile from './NavigationMobile.jsx';
import clsx from "clsx";
import css from './header.module.css';

function Header () {
  
    return (

   
        <header className={css.header}>
          <div className={css.container_header}>
       
       <div className={css.logo}>
      
      {" "}
      <a href="/">Прецедент Групп</a>{" "}
  
      </div>
          <Navigation/>
    <NavigationMobile/>
   
    </div>
    </header>
   
        
         

    ) }
        
export default Header; 