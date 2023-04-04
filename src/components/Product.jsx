import React, { useEffect, useState } from 'react'

const Product = () => {

 const [coffee, setCoffee] = useState([]);

 const getData = async () => {
   const resp = await fetch("https://api.sampleapis.com/coffee/hot");
   const data = await resp.json();
   setCoffee(data);
  
 };

 useEffect(() => {
   getData();
 }, []);


console.log(coffee)



  return (
    <div>
      {coffee.map((item) => {
        return (
          <div key={item.id} className="product">
            <div>
              {" "}
              <h1>{item.title}</h1>
              <img className="coffeePicture" src={item.image} alt="img" />
              <div>
                <h5>İçindekiler:</h5>
                <p>{item.ingredients[0]}</p> <p>{item.ingredients[1]}</p>{" "}
                <p>{item.ingredients[2]}</p> <p>{item.ingredients[3]}</p>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product