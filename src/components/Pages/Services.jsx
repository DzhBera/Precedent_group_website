import icon1 from "./../../assets/icons/spec-1.svg";
import icon2 from "./../../assets/icons/spec-2.svg";
import icon3 from "./../../assets/icons/spec-3.svg";
import icon4 from "./../../assets/icons/spec-4.svg";
import icon5 from "./../../assets/icons/spec-5.svg";
import icon6 from "./../../assets/icons/spec-6.svg";
function Services() {
  return (
    <div className="container-services">
      <h1 className="services-title">Услуги</h1>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon1}
          alt="services icon"
        />
        <span className="title-item">
        
          1. Судебное представительство и защита по вышеописанным
          специализациям.
        </span>
      </div>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon2}
          alt="services icon"
        />
        <span className="title-item">2. Правовой аудит.</span>
      </div>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon3}
          alt="services icon"
        />
        <span className="title-item">3. Юридический консалтинг.</span>
      </div>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon4}
          alt="services icon"
        />
        <span className="title-item">
          4. Экспертно-аналитическая деятельность по составлению правовых и
          антикоррупционных экспертиз на законопроекты, а также разработка
          проектов законов и иных нормативно-правовых актов.
        </span>
      </div>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon5}
          alt="services icon"
        />
        <span className="title-item">
          5. Организация регистрации, перерегистрации, реорганизации, ликвидации
          юридических лиц (коммерческих и некоммерческих организаций) филиалов и
          представительств.
        </span>
      </div>
      <div className="services-item">
      <img
          className="services-icon"
          src={icon6}
          alt="services icon"
        />
        <span className="title-item">
          6. Составление корпоративных документов по различным отраслям права
        </span>
      </div>
    </div>
  );
}

export default Services;
