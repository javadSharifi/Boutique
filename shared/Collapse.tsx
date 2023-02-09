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
    <div className="collapse w-full rounded-lg   ">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content ">{children}</div>
    </div>
  );
}

export default Collapse;
