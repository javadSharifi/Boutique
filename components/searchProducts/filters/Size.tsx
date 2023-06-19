import React from 'react'
import Collapse from 'shared/Collapse';
import BtnFilter from './BtnFilter';

function Size() {
  return (
    <Collapse value={true} title="اندازه">
      <div className="flex justify-center flex-wrap gap-3 ">
        <BtnFilter name="X" />
        <BtnFilter name="SM" />
        <BtnFilter name="L" />
        <BtnFilter name="XXL" />
      </div>
    </Collapse>
  );
}

export default Size