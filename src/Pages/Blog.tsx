import classname from "../Assets/Style/blog.module.scss";
import blogfoto1 from "../Assets/Photo/BlogFoto/blogfoto1.png";
import blogfoto2 from "../Assets/Photo/BlogFoto/blogfoto2.png";

const Blog = () => {
  return (
    <main>
      <div className={classname["h2-cnt"]}>
        <h2> Blog Posts </h2>
      </div>

      <div className={classname["blog-main-container"]}>
        <div className={classname["blog1-container"]}>
          <div className={classname["text1-cnt"]}>
            <h3>Tempered Glass</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>

          <div className={classname["blog-img1"]}>
            <img src={blogfoto1} alt="foto" />
          </div>
        </div>

        <div className={classname["blog2-main-container"]}>
          <div className={classname["blog-img2"]}>
            <img src={blogfoto2} alt="" />
          </div>

          <div className={classname["blog2-cnt"]}>
            <h3>Back Cover</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>

        <div className={classname["blog3-container"]}>
          <h3>Mobile Brand and Price Strategy</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
