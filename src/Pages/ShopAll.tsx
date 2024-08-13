import { Link, useParams } from "react-router-dom";
import classname from "../Assets/Style/shopall.module.scss";
import { useEffect, useState } from "react";


export type ProdsType =  {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
    features:    string;
}

const ShopAll = () => {

    const [prods, setProds] = useState<null | ProdsType[]>(null) 

    const getData = async ()=> {
        const res = await fetch("http://localhost:3000/data.json");
        const data = await res.json()
        setProds(data.products)
    }

    useEffect(()=> {
        getData()
    }, [])

  return (
    <main>

     <div className={classname["shop-main-container"]}>
        <h2>Shop All Product</h2>

      <div className={classname["product-main-container"]}>

        {
            prods?.map((item)=>{
                return(
                    <div key={item.id} className={classname['product-container']}>
                    <div className={classname['product-img']}>
                        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                    <p>{item.slug}</p>
                    <Link to={`http://localhost:3000/product/${item.id}`}>ss</Link>
                </div>
                )
            })
        }
      </div>
    </div>
    </main>
  );
};

export default ShopAll;
