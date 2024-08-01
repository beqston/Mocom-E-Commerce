import classname from "../Assets/Style/singleitem.module.scss";
import item from "../Assets/Photo/ShopAll/product10.png";
import product9 from "../Assets/Photo/ShopAll/product9.png";
import product11 from "../Assets/Photo/ShopAll/product11.png";
import product12 from "../Assets/Photo/ShopAll/product12.png";

const SingleItem = () => {
  return (
    <main>
      <div className={classname["blog-main-container"]}>
        <h2>Shop Item</h2>

        <div className={classname["item-main-container"]}>
          <div className={classname["item-container"]}>
            <div>
              <img src={item} alt="samsung" />
            </div>
          </div>

          <div className={classname["item-title-container"]}>
            <h3>Samsung S21 Silicon Cover</h3>

            <div className={classname["span-container"]}>
              <span>
                Item 20 <span>LKR 599</span>
              </span>{" "}
              <br />
              <span>
                tem 50 <span>LKR 549</span>
              </span>{" "}
              <br />
              <span>
                Item 100 <span>LKR 449</span>{" "}
              </span>
            </div>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
              </p>
              <br />
              <span>Contact us : 072 708 8455 | 071 789 9488</span>
            </article>
          </div>
        </div>

        <div className={classname["blog-botton-container"]}>
          <h3>similar Product</h3>

          <div className={classname["main-bottom"]}>
            <div className={classname["product-bottom-container"]}>
              <div className={classname["prod-img"]}>
                <img src={product9} alt="iphone" />
              </div>
              <p>
                iPhone 13 Pro - Transparent <br /> LKR 499
              </p>
            </div>

            <div className={classname["product-bottom-container"]}>
              <div className={classname["prod-img"]}>
                <img src={item} alt="samsung" />
              </div>
              <p>
                Samsung S23+ - Transparent <br /> LKR 799
              </p>
            </div>

            <div className={classname["product-bottom-container"]}>
              <div className={classname["prod-img"]}>
                <img src={product11} alt="pixel" />
              </div>
              <p>
                Pixel 6a - Transparent  <br /> LKR 599
              </p>
            </div>

            <div className={classname["product-bottom-container"]}>
              <div className={classname["prod-img"]}>
                <img src={product12} alt="pixel" />
              </div>
              <p>
                Pixel 7 Pro - Transparent Wireless <br /> LKR 599
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleItem;
