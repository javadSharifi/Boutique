import Link from 'next/link';
import React from 'react'

function ProductDescription() {
  return (
    <div>
      <h1 className="text-2xl">سویشرت مردانه ایندیگو Indigo کد 312122560</h1>
      <div className="flex gap-2 border-b-2 pb-4">
        <p className="text-lg">دسته بندی :</p>
        <Link href="/" className="font-bold text-blue-500 text-lg">
          سویشرت
        </Link>
      </div>
    </div>
  );
}

export default ProductDescription