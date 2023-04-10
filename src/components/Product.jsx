import React, { useContext} from 'react'

import { BasketContext } from '../context/BasketContextProvider';

const Product = () => {


  // Apiden gelen verinin tutalacağı state


 const { product, state: basket, addtoBasket } = useContext(BasketContext);
 



console.log(basket)





      

  return (
    <div className="container">
      {product?.map((item) => {
    
        return (
          <div key={item.id} className="coffee">
            <h1>{item.title}</h1>
            <img className="coffeePicture" src={item.image} alt="img" />
            <div className="item">
              <div className="icindekilerItem">
                <div className="itemList">
                  <h4>Ingredients:</h4>
                  <span>{item.ingredients[0]}</span>
                  <span>{item.ingredients[1]}</span>{" "}
                </div>

                <button className="btnSiparis" onClick={()=>addtoBasket(item)}>
                  Order
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product