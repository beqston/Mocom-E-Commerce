import classname from "../Assets/Style/search.module.scss"
import { useContext, useEffect, useState } from "react";
import { CartContext, CartContextType } from "../context/SearchContext";
import { ProdsType } from "./ShopAll";
import { Link } from "react-router-dom";


const Search = ()=> {
  const {searchItem} = useContext(CartContext) as CartContextType

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
        <main>
            {
              searchItem.length > 0? <>
              {
                prods?.filter((item)=> item.name.toLowerCase().includes(searchItem)).map((item)=> {
                  return(
                    <>
                      <div key={item.id} className={classname["search-main-cnt"]}>
                        <Link to={`http://localhost:3000/product/${item.id}`}>
                          <div className={classname["img"]}>
                              <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                          </div>
                          <div className={classname["p-cnt"]}>
                            <p>{item.name}</p>
                            <p>{item.slug}</p>
                          </div>
                        </Link>
                      </div>
                    </>
                  )
                })
              }
              </>:null
            }
        </main>
    )
}

export default Search;