import { NavLink } from "react-router-dom";
import rentacle from "../Assets/Photo/HomeFoto/Rectangle-3xx.png";
import classname from "../Assets/Style/home.module.scss";
import product1 from "../Assets/Photo/HomeFoto/PoruductFoto/product1.png";
import product2 from "../Assets/Photo/HomeFoto/PoruductFoto/product2.png";
import product3 from "../Assets/Photo/HomeFoto/PoruductFoto/product3.png";
import product4 from "../Assets/Photo/HomeFoto/PoruductFoto/product4.png";
import rentacle18 from "../Assets/Photo/HomeFoto/Rectangle18.png";
import rentacle19 from "../Assets/Photo/HomeFoto/Rectangle19.png";
import rentacle20 from "../Assets/Photo/HomeFoto/Rectangle20.png";
import rentacle21 from "../Assets/Photo/HomeFoto/Rectangle21.png";
import item1 from "../Assets/Photo/HomeFoto/Botomimg/item1.png";
import item2 from "../Assets/Photo/HomeFoto/Botomimg/item2.png";
import item3 from "../Assets/Photo/HomeFoto/Botomimg/item3.png";

const Home = () => {
  return (
    <main>
      <div className={classname["home-container"]}>
        <div className={classname.home}>
          <div className={classname.div}>
            <div className={classname.text}>
              <div className={classname["h-text"]}>
                <h2>Mobile</h2>
                <h3 className={classname["h3-tex"]}>Backcover</h3>
                <h3>Tempered Glass</h3>
              </div>
              <button type="button">
                <NavLink to={"/shopall"}>Shop all!</NavLink>
              </button>
            </div>
          </div>

          <div className={classname.mobile}>
            <img src={rentacle} alt="mobile" />
          </div>
        </div>
        <div className={classname["product-container"]}>
        <NavLink to={"/product/1"}>
            <div className={classname.product}>
              <button type="button">
                Sale!
              </button>
              <div className={classname.img}>
                <img src={product1} alt="product" />
              </div>
              <div className={classname["name-cnt"]}>
                <p>iPhone 13 Pro - Transparent </p>
                <p>LKR 499</p>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/product/2"}>
            <div className={classname.product}>
              <button>
                Sale!
              </button>
              <div className={classname.img}>
                <img src={product2} alt="product" />
              </div>
              <div className={classname["name-cnt"]}>
                <p>Samsung S23+ - Transparent </p>
                <p>LKR 799</p>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/product/7"}>
            <div className={classname.product}>
              <button type="button">
                Sale!
              </button>
              <div className={classname.img}>
                <img src={product3} alt="product" />
              </div>
              <div className={classname["name-cnt"]}>
                <p>iPhone 14 - Transparent with magsafe </p>
                <p>LKR 799</p>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/product/8"}>
            <div className={classname.product}>
              <button>
                Sale!
              </button>
              <div className={classname.img}>
                <img src={product4} alt="product" />
              </div>
              <div className={classname["name-cnt"]}>
                <p>Pixel 7 Pro - Transparent Wireless </p>
                <p>LKR 599</p>
              </div>
            </div>
          </NavLink>

          </div>

        <div className={classname["abaut-container"]}>
          <div>
            <img src={rentacle18} alt="rentacle" />
          </div>
          <div>
            <span>abaut us</span>
          </div>
        </div>

        <div className={classname["hp-container"]}>
          <h2>
            If you're looking for a Premium Quality empered Glass or Back-cover
            for your Device
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className={classname.rentacle19}>
          <img src={rentacle19} alt="rentacle" />
        </div>


        <div className={classname["botom-main-cnt"]}>
          <div className={classname["z-cnt"]}>
            <div className={classname["txt-container"]}>
              <h3>
                Shop Premium <br />
                Tempered Glass in wholesale <br />
                Price !
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
                <br /> <br />
                <span>LKR : 299</span>
              </p>

              <br />
              <div className={classname['botom-btn']}>
              <NavLink to={"/item"}><button> Shop Tempered Glass </button></NavLink>
              </div>
            </div>

            <div className={classname["bg-main-img"]}>
              <div className={classname["botom-right-cnt"]}>
                <img src={rentacle21} alt="foto" />
              </div>
            </div>

          </div>

          <div className={classname["bg-img"]}>
            <img src={rentacle20} alt="foto" />
          </div>
        </div>

        <div className={classname["abaut-container"]}>
          <div>
            <img src={rentacle18} alt="rentacle" />
          </div>
          <div>
            <span>Why Choose US</span>
          </div>
        </div>

        <div className={classname["botoom-item-container"]}>
          <div className={classname["item-left"]}>
            <div className={classname["item-img"]}>
              <img src={item1} alt="foto" />
            </div>

            <h2>Fast Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={classname["item-centre"]}>
            <div className={classname["item-img"]}>
              <img src={item2} alt="foto" />
            </div>

            <h2>Cheap Price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={classname["item-right"]}>
            <div className={classname["item-img"]}>
              <img src={item3} alt="foto" />
            </div>

            <h2>Premium Quality</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
