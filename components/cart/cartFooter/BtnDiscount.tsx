import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

function BtnDiscount() {
  return (
    <button className="btn btn-error gap-4 btn-outline">
      ثبت کد تخفیف <PlusCircleIcon className="w-6" />
    </button>
  );
}

export default BtnDiscount