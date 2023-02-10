import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useState } from "react";
import Collapse from "shared/Collapse";

function BasedOnPrice() {
  const [range, setRange] = useState<number>(0);
  return (
    <Collapse title="بر اساس قیمت">
      <>
        <div className="w-full text-center ">
          <p className="text-lg font-bold">
            قیمت تا: {digitsEnToFa(addCommas(range))} تومان
          </p>
        </div>
        <input
          type="range"
          min={0}
          max={1000000}
          value={range}
          onChange={(e) => {
            setRange((prevCount) => e.target.valueAsNumber);
          }}
          className="w-full h-4 accent-pink-500"
        />
        <div className="flex text-lg font-bold justify-between">
          <p>{digitsEnToFa(addCommas(0))}</p>
          <p>{digitsEnToFa(addCommas(1000000))}</p>
        </div>
      </>
    </Collapse>
  );
}

export default BasedOnPrice;
