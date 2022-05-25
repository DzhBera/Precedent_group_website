import clsx from "clsx";
import css from "./footer.module.css";
import  LocationIcon  from "./../../assets/icons/location_icon.svg";
import  EmailIcon  from "./../../assets/icons/email_icon.svg";
import  PhoneIcon  from "./../../assets/icons/phone_icon.svg";
function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className= {css.phone} >
        < div className={css.item} >
        <img
              src={PhoneIcon}
             
              alt="phone icon"
            />
          <a href="tel:996312906616">+996 312 906616</a>
        </div>
        </div>

        <div className={css.email}>
        <div className={css.item}><img 
       
              src={EmailIcon}
              
              alt="email icon"
            />
          
          <a href="mailto:precedentoffice@gmail.com">precedentoffice@gmail.com</a>
          </div>
        
        </div>
       
        <address className={css.location}>
          <div className={css.item}>
          <img
              src={LocationIcon}
            
              alt="location icon"
            />
          <a href="https://go.2gis.com/s91li"> Бишкек, ул. Сыдыкова 187 офис 28</a>
          </div>       
        </address>
      </div>
    </footer>
  );
}

export default Footer;
