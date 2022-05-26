import css from "./headermobile.module.css";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";
import MobileIcon from "./../../assets/icons/menu_icon.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function HeaderMobile() {
  const [showNav, setShowNav] = useState(false);
  let nav;
  if (showNav) {
    nav = <MobileNavigation />;
  }
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo_container}>
          <Link to="/">
            <span className={css.logo}> Прецедент ГруппM</span>
          </Link>
        </div>
        <button onClick={() => setShowNav(!showNav)}>
          <img
            className={css.mobile_icon}
            src={MobileIcon}
            alt="navigation icon"
          />
        </button>
        {nav}
      </div>
    </header>
  );
}
export default HeaderMobile;
