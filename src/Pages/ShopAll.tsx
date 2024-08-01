import classname from "../Assets/Style/shopall.module.scss";
import product1 from "../Assets/Photo/ShopAll/product1.png";
import product2 from "../Assets/Photo/ShopAll/product2.png";
import product3 from "../Assets/Photo/ShopAll/product3.png";
import product4 from "../Assets/Photo/ShopAll/product4.png";
import product5 from "../Assets/Photo/ShopAll/product5.png";
import product6 from "../Assets/Photo/ShopAll/product6.png";
import product7 from "../Assets/Photo/ShopAll/product7.png";
import product8 from "../Assets/Photo/ShopAll/product8.png";
import product9 from "../Assets/Photo/ShopAll/product9.png";
import product10 from "../Assets/Photo/ShopAll/product10.png";
import product11 from "../Assets/Photo/ShopAll/product11.png";
import product12 from "../Assets/Photo/ShopAll/product12.png";
import product13 from "../Assets/Photo/ShopAll/product13.png";
import product14 from "../Assets/Photo/ShopAll/product14.png";
import product15 from "../Assets/Photo/ShopAll/product15.png";
import product17 from "../Assets/Photo/ShopAll/product17.png";

const ShopAll = () => {
  return (
    <main>
            <div className={classname["shop-main-container"]}>
      <h2>Shop All Product</h2>

      <div className={classname["product-main-container"]}>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product1} alt="iphone" />
            </div>
            <p>iPhone 13 Pro - Transparent <br /> LKR 499</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product2} alt="samsung" />
            </div>
            <p>Samsung S23+ - Transparent <br />LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product3} alt="iphone" />
            </div>
            <p>iPhone 14 - Transparent with magsafe <br /> LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product4} alt="pixel" />
            </div>
            <p>Pixel 7 Pro - Transparent Wireless <br /> LKR 599</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product5} alt="pixel" />
            </div>
            <p>Pixel 6 a - Matte Black <br />LKR 499</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product6} alt="pixel" />
            </div>
            <p>Pixel 6a  <br /> LKR 399</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product7} alt="iphone" />
            </div>
            <p>iPhone 14 - Transparent with magsafe <br /> LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product8} alt="pixel" />
            </div>
            <p>Pixel 7 Pro - Transparent Wireless <br /> LKR 599</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product9} alt="iphone" />
            </div>
            <p>iPhone 13 Pro - Transparent <br /> LKR 499</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product10} alt="samsung" />
            </div>
            <p>Samsung S23+ - Transparent <br /> LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product11} alt="pixel" />
            </div>
            <p>Pixel 6a - Transparent  <br /> LKR 599</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product12} alt="pixel" />
            </div>
            <p>Pixel 7 Pro - Transparent Wireless <br /> LKR 599</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product13} alt="iphone" />
            </div>
            <p>iPhone 13 Pro - Transparent <br /> LKR 499</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product14} alt="samsung" />
            </div>
            <p>Samsung S23+ - Transparent <br /> LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product15} alt="iphone" />
            </div>
            <p>iPhone 14 - Transparent with magsafe <br /> LKR 799</p>
        </div>

        <div className={classname['product-container']}>
            <div className={classname['product-img']}>
                <img src={product17} alt="pixel" />
            </div>
            <p>Pixel 7 Pro - Transparent Wireless <br /> LKR 599</p>
        </div>

      </div>
    </div>
    </main>
  );
};

export default ShopAll;
