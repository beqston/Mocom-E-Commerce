import classname from "./style.module.scss";
import mocom from "../../Assets/Photo/HeaderFoto/mocom.png";
import whatsapp from "../../Assets/Photo/FooterFoto/whatsapp.png";
import facebook from "../../Assets/Photo/FooterFoto/facebook.svg";
import instagram from "../../Assets/Photo/FooterFoto/instagram.svg";
import tiktok from "../../Assets/Photo/FooterFoto/tik-tok.svg";

const Footer = () => {
  return (
    <footer>
          <div className={classname["footer-container"]}>
      <div className={classname["footer1"]}>
        <div className={classname["container1"]}>
          <div className={classname.img}>
            <img src={mocom} alt="mocom" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={classname["container2"]}>
          <h4>Contact us</h4>
          <div>
            <span>E:info@example.com</span>
          </div>
          <div>
            <span>P: +94 7670000000</span>
          </div>
          <div>
            <span>A:123 Hospital rd, </span>
          </div>
          <div>
            <span>Kalubowila, Dehiwela</span>
          </div>
        </div>
      </div>

      <div className={classname["footer2"]}>
        <div className={classname["container3"]}>
          <h4>Useful links</h4>
          <div>
            <span>Shop All </span>
          </div>
          <div>
            <span>Tempered Glass</span>
          </div>
          <div>
            <span>Back-cover</span>
          </div>
          <div>
            <span>About Us</span>
          </div>
        </div>

        <div className={classname["container4"]}>
          <div className={"img-container"}>
            <div className={classname["item"]}>
                <img src={whatsapp} alt="whatsapp" />
                <div><span>Whatsapp</span></div>
            </div>

            <div className={classname["item"]}>
              <img src={facebook} alt="facebook" />
              <div><span>Facebook</span></div>
            </div>

            <div className={classname["item"]}>
              <img src={instagram} alt="instagram" />
              <div><span>Instagram</span></div>
            </div>

            <div className={classname["item"]}>
              <img src={tiktok} alt="tik-tok" />
              <div><span>Tik Tok</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
