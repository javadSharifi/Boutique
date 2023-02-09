import React from 'react'
import Collapse from 'shared/Collapse';

function Filters() {
  return <div dir='rtl' className="bg-slate-200/60 flex flex-col gap-4 p-2 items-center w-11/12 rounded-lg  ">
    <Collapse title='اندازه' value={true} >
        <p>a</p>
    </Collapse>
  </div>;
}

export default Filters