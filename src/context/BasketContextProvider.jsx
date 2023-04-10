import React, { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  // veri çekme fonksiyonu
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/iced");
    const data = await resp.json();
    setProduct(data);
  };

  // gelen bilginin ilk render de ekrana basılmasını sağlayan useEffect hooku
  useEffect(() => {
    getData();
  }, []);

  const [basket, setBasket] = useState({
    productList: product,
    cart: [],
  });

  // Ürün ekleme fonksiyonu
  // tıkladığımız ürünün sepette var ise (cart: basket.cart.find((cartItem) => cartItem.id === item.id)) miktarını 1 arttır.
  // eğer yok ise miktarını 1 olarak ( [...basket.cart, { ...item, count: 1 }],) onu sepete ekle.
  const addtoBasket = (item) =>
    setBasket({
      ...basket,
      cart: basket.cart.find((cartItem) => cartItem.id === item.id)
        ? basket.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...basket.cart, { ...item, count: 1 }],
    });

  // silme fonksiyonu
  // stateti açıyoruz.(basket) İçinde bulunan cart arrayimizinden bir ürüne tıkladık ve Tıkladığımız ürün id si ile eşlesiyorsa ürünü çıkart.
  const removefromBasket = (id) =>
    setBasket({
      ...basket,
      cart: basket.cart.filter((cartItem) => cartItem.id !== id),
    });

  // miktarı arttırma fonksiyonu
  // stateti açıyoruz.(basket) İçinde bulunan cart arrayimizinden bir ürüne tıkladık ve Tıkladığımız ürün id si ile eşlesiyorsa count'tu bir arttır
  const increase = (id) => {
    setBasket({
      ...basket,
      cart: basket.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  // miktarı azaltma fonksiyonu
  // stateti açıyoruz.(basket) İçinde bulunan cart arrayimizinden bir ürüne tıkladık ve Tıkladığımız ürün id si ile eşlesiyorsa count'tu bir azalt Ancak count birden az ise miktar 1 olarak bırak
  // çünkü remove fonksiyonumuzda var.
  const decrease = (id) => {
    setBasket({
      ...basket,
      cart: basket.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <BasketContext.Provider
      value={{
        product,
        basket,
        addtoBasket,
        removefromBasket,
        increase,
        decrease,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

