import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShopAll from "../Pages/ShopAll";
import Blog from "../Pages/Blog";
import About from "../Pages/AboutUs";
import SingleItem from "../Pages/SingleItem";
import NotFound from "../Pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopall" element={<ShopAll />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/item" element={<SingleItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
