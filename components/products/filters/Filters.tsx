import React from "react";
import Checkbox from "shared/Checkbox";
import Collapse from "shared/Collapse";

function Filters() {
  return (
    <div
      dir="rtl"
      className="bg-slate-200/60 flex flex-col   gap-4 p-2 items-center w-11/12 rounded-lg  "
    >
      <div
        tabIndex={1}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={1} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <Collapse title="a" >
        <p>a</p>
      </Collapse>
    </div>
  );
}

export default Filters;
