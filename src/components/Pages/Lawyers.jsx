import lawyer_photo from "./../../assets/images/lawyer.jpg";
function Lawyers() {
  return (
      <div className="main-container-lawyers">       <h1 className="lawyers_title">Юристы</h1>
      <div className="container_lawyers">
      <div className="lawyer_card">
        {" "}
        <div className="container-lawyer-photo">
          <img className="lawyer_photo" src={lawyer_photo} alt="lawyer photo" />{" "}
        </div>
       <p className="lawyer-name"> Поленова Юлия</p>
        <p>Vivamus scelerisque risus id felis aliquam cursus.</p>
      </div>
      <div className="lawyer_card">
        {" "}
        <div className="container-lawyer-photo">
          <img className="lawyer_photo" src={lawyer_photo} alt="lawyer photo" />{" "}
        </div>
       <p className="lawyer-name"> Ахматова Жылдыз</p>
        <p>Vivamus scelerisque risus id felis aliquam cursus.</p>
      </div>
      <div className="lawyer_card">
        {" "}
        <div className="container-lawyer-photo">
          <img className="lawyer_photo" src={lawyer_photo} alt="lawyer photo" />{" "}
        </div>
       <p className="lawyer-name"> Бекмаматов Айбек</p>
        <p>Vivamus scelerisque risus id felis aliquam cursus.</p>
      </div>
      <div className="lawyer_card">
        {" "}
        <div className="container-lawyer-photo">
          <img className="lawyer_photo" src={lawyer_photo} alt="lawyer photo" />{" "}
        </div>
       <p className="lawyer-name"> Жалилова Айзада</p>
        <p>Vivamus scelerisque risus id felis aliquam cursus.</p>
      </div>
      
    
    </div>
      </div>
    
  );
}

export default Lawyers;
