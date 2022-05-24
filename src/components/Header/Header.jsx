import { Link } from 'react-router-dom';
import Navigation from "./Navigation.jsx";
import NavigationMobile from './NavigationMobile.jsx';
import clsx from "clsx";
import css from './header.module.css';

function Header () {
  
    return (

   
        <header className={css.header}>
         <div className={css.container}>
         <div className={css.container_header}>
       
         <Link to="/">
          <span className={css.logo}> Прецедент Групп</span> 
        </Link>

          <Navigation/>
    <NavigationMobile/>
   
    </div>
         </div>
    </header>
   
        
         

    ) }
        
export default Header; 