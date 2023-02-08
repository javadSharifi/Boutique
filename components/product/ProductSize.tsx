import React from "react";

function ProductSize() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold"> سایز :</h3>
      <div className="flex gap-4">
        <button className="btn glass text-black  border-4 border-black w-12 h-10">
          S
        </button>
        <button className="btn glass text-black  border-4 border-black w-12 h-10">
          L
        </button>
        <button className="btn glass text-black  border-4 border-black w-12 h-10">
          M
        </button>
      </div>
    </div>
  );
}

export default ProductSize;
