import React, { useEffect, useState } from 'react'

const Product = () => {


  // Apiden gelen verinin tutalacağı state
 const [coffee, setCoffee] = useState([]);


 // Api den veri çekme fonksiyonu
 const getData = async () => {
   const resp = await fetch("https://api.sampleapis.com/coffee/hot");
   const data = await resp.json();
   setCoffee(data);
  
 };

 // gelen bilginin ilk render de ekrana basılmasını sağlayan useeFFECT hookU
 useEffect(() => {
   getData();
 }, []);


// console.log(coffee)



  return (
    <div className="container">
      {coffee.map((item) => {
        return (
          <div key={item.id} className="coffee">
            <h1>{item.title}</h1>
            <img className="coffeePicture" src={item.image} alt="img" />
            <div className="item">
              <div className="icindekilerItem">
                <div className="itemList">
                  <h4>Ingredients:</h4>
                  <span>{item.ingredients[0]}</span><span>{item.ingredients[1]}</span>{" "}
                  
                </div>

                <button className="btnSiparis">Order</button>
              </div>
            </div>
          </div>
        );
      })}
     
    </div>
  );
}

export default Product