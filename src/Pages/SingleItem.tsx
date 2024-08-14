import classname from "../Assets/Style/singleitem.module.scss";
import item from "../Assets/Photo/ShopAll/product10.png";
import product9 from "../Assets/Photo/ShopAll/product9.png";
import product11 from "../Assets/Photo/ShopAll/product11.png";
import product12 from "../Assets/Photo/ShopAll/product12.png";
import { useEffect, useState } from "react";
import { ProdsType } from "./ShopAll";
import { Link, useParams } from "react-router-dom";

type ProdID = {
  id: string | undefined
}

const SingleItem = () => {
  const {productID} = useParams()

  const [prods, setProds] = useState<null | ProdsType[]>(null) 

  const getData = async ()=> {
      const res = await fetch("http://localhost:3000/data.json");
      const data = await res.json()
      setProds(data.products)
  }

  useEffect(()=> {
      getData()
  }, [])


  return(
    <>
    

    {prods?.filter((prod: ProdID)=> prod.id === productID).map((prod)=> {
  
    return (
      <main>
        <div className={classname["blog-main-container"]}>
          <h2>Shop Item</h2>

          <div className={classname["item-main-container"]}>
            <div className={classname["item-container"]}>
              <div>
              <img src={`http://localhost:3000/${prod.image}`} alt={prod.name} />
              </div>
            </div>

            <div className={classname["item-title-container"]}>
              <h3>{prod.name}</h3>

              <div className={classname["span-container"]}>
                <span>
                  Item {prod.id} <span>LKR {Number(prod.id) * 20 + 12}</span>
                </span>
                <br />
                <span>
                  Item {parseInt(prod.id) * 10} <span>LKR {Number(prod.id)* 30 + 3}</span>
                </span>
                <br />
                <span>
                  Item {parseInt(prod.id) * 10 + parseInt(prod.id) + 30} <span>{prod.slug}</span>
                </span>
              </div>
              <article>
                <p>
                  {prod.description}
                </p>
                <br />
                <p>
                  {prod.features}
                </p>
                <br />
                <span>Contact us : 072 708 8455 | 071 789 9488</span>
              </article>
            </div>
          </div>

          <div className={classname["blog-botton-container"]}>
            <h3>similar Product</h3>
           
            <div className={classname["main-bottom"]}>
             <Link to={"/product/1"} >
                <div className={classname["product-bottom-container"]}>
                  <div className={classname["prod-img"]}>
                    <img src={product9} alt="iphone" />
                  </div>
                  <p>
                    {prod.name}<br /> LKR 499
                  </p>
                </div>
             </Link>


             <Link to={"/product/2"} >
                <div className={classname["product-bottom-container"]}>
                  <div className={classname["prod-img"]}>
                    <img src={item} alt="samsung" />
                  </div>
                  <p>
                    Samsung S23+ - Transparent <br /> LKR 799
                  </p>
                </div>
              </Link>

             <Link to={"/product/5"} >
                <div className={classname["product-bottom-container"]}>
                  <div className={classname["prod-img"]}>
                    <img src={product11} alt="pixel" />
                  </div>
                  <p>
                    Pixel 6a - Transparent  <br /> LKR 599
                  </p>
                </div>
              </Link>

              <Link to={"/product/8"} >
                <div className={classname["product-bottom-container"]}>
                  <div className={classname["prod-img"]}>
                    <img src={product12} alt="pixel" />
                  </div>
                  <p>
                    Pixel 7 Pro - Transparent Wireless <br /> LKR 599
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
})}
    </>
  )
  
  

};

export default SingleItem;
