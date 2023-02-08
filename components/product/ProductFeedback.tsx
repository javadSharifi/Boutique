import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'

function ProductFeedback() {
  return (
    <div className="flex gap-3">
      <div className="flex ">
        <div className="flex gap-2 ">
          <StarIcon className="text-lg w-5 text-yellow-400" />
          <p> 4.5 </p>
        </div>
      </div>
      |
      <div className="flex ">
        <div className="flex gap-2 text-blue-600 text-lg font-semibold ">
          <p> 4 دیدگاه </p>
        </div>
      </div>
    </div>
  );
}

export default ProductFeedback