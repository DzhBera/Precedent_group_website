import facebook_icon from "./../../assets/icons/facebook.svg"
function Contacts() {
    return (
    <div className="container-contacts">
      <div className="container-items">  <p>
            Адрес: Кыргызская Республика, г. Бишкек, ул. Сыдыкова 187, офис 28
        </p>
       <p>Номер телефона: <a href="tel:996312906616">+996 312 906616</a> </p> 
       <p> Электронная почта <a href="mailto:precedentoffice@gmail.com">precedentoffice@gmail.com</a></p>
       <div className="facebook"><img src={facebook_icon} alt="facebook icon" />
        <a href="https://www.facebook.com/precedentinfo">Facebook</a>
        </div>
    </div>
       
     </div>
    );
  }
  
  export default Contacts;