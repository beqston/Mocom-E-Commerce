import { NavLink } from "react-router-dom";
import BurgMenu from "../BurgMenu/BurgMenu";
import classname from "./style.module.scss";
import mocom from "../../Assets/Photo/HeaderFoto/mocom.png";
import search from "../../Assets/Photo/HeaderFoto/search.png";



const Header = () => {


  return (
    <header>
      <div className={classname["header-container"]}>
        
        <BurgMenu />

        <div className={classname["header-left-container"]}>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/shopall"}>Shop All</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classname["header-center-container"]}>
          <NavLink to={"/"}>
            <img src={mocom} alt="mocom" />
          </NavLink>
        </div>

        <div className={classname["header-right-container"]}>
          <div className={classname.nav}>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className={classname.search}>
            <input type="text" placeholder="Search Product" />
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
