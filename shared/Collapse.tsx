import React, { useState } from "react";

interface ICollapse {
  title: string;
  value?: boolean;
  children: JSX.Element;
}

function Collapse({ title, value = false, children }: ICollapse) {
  const [checked, setChecked] = useState(value);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="collapse w-full rounded-lg   collapse-plus border-2 ">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className="collapse-title md:text-sm text-lg lg:text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content text-lg lg:px-8  ">{children}</div>
    </div>
  );
}

export default Collapse;
