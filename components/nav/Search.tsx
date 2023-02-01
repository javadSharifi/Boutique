import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react'

function Search() {
  return (
    <div className="bg-slate-300/30  p-1 rounded-xl    h-full  w-full md:w-[40vw] lg:w-[30rem] flex gap-2 ">
      <MagnifyingGlassIcon className='w-9 ml-3 text-slate-500'/>
      <input type="search" className='w-full bg-transparent outline-none text-lg placeholder-slate-400 font-medium text-gray-500  ' placeholder='جست و جو فروشگاه'  />
    </div>
  );
}

export default Search