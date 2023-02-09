import { addCommas, digitsEnToFa } from '@persian-tools/persian-tools';
import React from 'react'

function PriceCard() {
  return (
    <div dir="rtl" className="flex flex-col  items-center">
      <div className="flex font-bold text-end text-red-400 text-base gap-2">
        <p> {digitsEnToFa(addCommas(300000))} تومان</p>
      </div>
      <div className="flex font-bold text-end line-through decoration-gray-500/70 decoration-2	  text-sm gap-2">
        <p> {digitsEnToFa(addCommas(300000))} تومان</p>
      </div>
    </div>
  );
}

export default PriceCard