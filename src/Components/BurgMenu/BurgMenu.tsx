import { useState } from "react";
import { NavLink } from "react-router-dom";
import classname from "./style.module.scss";

import burgmenu from "../../Assets/Photo/HeaderFoto/burger-menu.svg";
import closemenu from "../../Assets/Photo/HeaderFoto/close-del.svg";

const BurgMenu = () => {
  const [burgIcon, setBuurgIcon] = useState("burg-icon-none");
  const [close, setClose] = useState("close-icon-none");
  const [burgMenuList, setBurgMenuList] = useState("burg-menu-list-none");
  const [menu, setMenu] = useState("burger-menu-none");
  const [activeIcon, setActiveIcon] = useState('active-burg-menu')

  const handlBurgIcon = () => {
    setBuurgIcon("burg-icon-none");
    setClose("close-icon");
    setBurgMenuList("burg-menu-list");
    setActiveIcon('active-burg-menu-none');
  };
  const handlClose = () => {
    setMenu("burger-menu-none");
    setActiveIcon('active-burg-menu');
    setActiveIcon('active-burg-menu');
  };


  const handlActiveBurgMenu = ()=> {
    setActiveIcon('active-burg-menu-none');
    setBuurgIcon("burg-icon-none");
    setMenu('burger-menu');
    setClose('close-icon');
    setBurgMenuList('burg-menu-list')

  }

  const handlMenu = () => {
    setMenu("burger-menu-none");
    setActiveIcon('active-burg-menu');
    setActiveIcon('active-burg-menu');
  };

  return (
    <div className="main-burger-container">

        <div onClick={handlActiveBurgMenu} className={classname[`${activeIcon}`]}>
            <img src={burgmenu} alt="icon" />
        </div>

      <div className={classname[`${menu}`]}>
        <div onClick={handlBurgIcon} className={classname[`${burgIcon}`]}>
          <img src={burgmenu} alt="icon" />
        </div>

        <div onClick={handlClose} className={classname[`${close}`]}>
          <img src={closemenu} alt="icon" />
        </div>

        <div className={classname[`${burgMenuList}`]}>
          <nav>
            <ul>
              <li>
                <NavLink onClick={handlMenu} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handlMenu} to={"/shopall"}>
                  Shop All
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handlMenu} to={"/blog"}>
                  Blog
                </NavLink>
              </li>
              <li>
                  <NavLink to={"/about"}>About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgMenu;
