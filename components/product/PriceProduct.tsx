import { addCommas, digitsEnToFa } from '@persian-tools/persian-tools';
import React from 'react'

function PriceProduct() {
  return (
    <p className="text-2xl font-bold text-red-600">
      {digitsEnToFa(addCommas(300000))} تومان
    </p>
  );
}

export default PriceProduct