import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShopAll from "../Pages/ShopAll";
import Blog from "../Pages/Blog";
import About from "../Pages/AboutUs";
import SingleItem from "../Pages/SingleItem";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Search from "../Pages/Search";

const RouterComponent = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shopall" element={<ShopAll />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productID" element={<SingleItem />} />
            <Route path="/search/:searchProducts" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Route>

    </Routes>
  );
};

export default RouterComponent;
