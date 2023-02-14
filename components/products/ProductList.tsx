import React from "react";
import img1 from "public/img/moncan/1.jpg";
import img3 from "public/img/moncan/3.jpg";
import img4 from "public/img/moncan/4.jpg";
import img5 from "public/img/moncan/5.jpg";
import img7 from "public/img/moncan/7.jpg";
import { cartProduct } from "interface";
import CartProduct from "components/ProductCard";

function ProductList() {
  const products: cartProduct[] = [
    {
      name: "lorder1",
      price: "30",
      img: img1,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder2",
      price: "30",
      img: img3,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder3",
      price: "30",
      img: img4,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder4",
      price: "30",
      img: img5,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
    {
      name: "lorder5",
      price: "30",
      img: img7,
      colors: ["#FF9999", "#7FFFA1", "#EEF685", "#99DFF9"],
    },
  ];
  return (
    <div className="grid  gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4   ">
      {products.map(({ img, name, price, colors }) => (
        <>
          {console.log(name)}
          <CartProduct
            key={name + 2}
            colors={colors}
            img={img}
            name={name}
            price={price}
          />
        </>
      ))}
      {products.map(({ img, name, price, colors }) => (
        <CartProduct
          key={name + 1}
          colors={colors}
          img={img}
          name={name}
          price={price}
        />
      ))}
      {products.map(({ img, name, price, colors }) => (
        <CartProduct
          key={name + 4}
          colors={colors}
          img={img}
          name={name}
          price={price}
        />
      ))}{" "}
      {products.map(({ img, name, price, colors }) => (
        <CartProduct
          key={name + 5}
          colors={colors}
          img={img}
          name={name}
          price={price}
        />
      ))}
    </div>
  );
}

export default ProductList;
