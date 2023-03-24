import React from "react";

import CartFooter from "@/components/cart/cartFooter";
import CartProductHeader from "@/components/cart/CartProductHeader";
import CartProducts from "@/components/cart/cartProducts";
import CartGoNext from "@/components/cart/CartGoNext";

function Cart() {
  return (
    <div className="flex justify-center mt-6 items-center">
      <div className="lg:w-9/12 md:w-11/12 w-full space-y-8">
        <CartProductHeader />
        <CartProducts />
        <CartFooter />
        <CartGoNext />
      </div>
    </div>
  );
}

export default Cart;
